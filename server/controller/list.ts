import { Request, Response } from 'express';
import { sanitize, MAGICNUM, cache } from './util';
import db from '../db';

const list = (req: Request, res: Response) => {
  //API Caching
  if (cache.has(req.url)) {
    console.log('200 OK - cache hit');
    return res.status(200).json(cache.get(req.url));
  }

  if (!Object.keys(req.query).length) {
    //simple query : skipping pagination
    db.all(`SELECT * from Article;`, (err: Error, rows: any) => {
      if (err) {
        console.dir(err);
        console.log('500 Internal Server Error - failed to get articles');
        return res.status(500).json({ code: 6, message: 'Failed to get articles' });
      }
      cache.set(req.url, rows);
      return res.status(200).json(rows);
    });
    return;
  }

  //multiple query : validiity check
  let username = '';
  if (req.query['username']) {
    username = sanitize(req.query['username']);
    if (username.length > MAGICNUM.MAX_USERNAME_LENGTH) {
      console.log('400 Bad Request - username too long');
      return res.status(400).json({ code: 0, message: 'Username is too long' });
    }
  }

  let articlename = '';
  if (req.query['articlename']) {
    articlename = sanitize(req.query['articlename']);
    if (articlename.length > MAGICNUM.MAX_ARTICLENAME_LENGTH) {
      console.log('400 Bad Request - articlename too long');
      return res.status(400).json({ code: 1, message: 'Articlename is too long' });
    }
  }

  let articletext = '';
  if (req.query['articletext']) {
    articletext = sanitize(req.query['articletext']);
    if (articletext.length > MAGICNUM.MAX_ARTICLETEXT_QUERY_LENGTH) {
      console.log('400 Bad Request - articletext too long');
      return res.status(400).json({ code: 2, message: 'Articletext is too long' });
    }
  }

  let orderby = 'DESC';
  if (req.query['orderby']) {
    orderby = sanitize(req.query['orderby']);
    if (orderby !== 'ASC' && orderby !== 'DESC') {
      console.log('400 Bad Request - orderby must be ASC or DESC');
      return res.status(400).json({ code: 2, message: 'Orderby must be ASC or DESC' });
    }
  }

  let limit = 0;
  if (req.query['articlePerPage']) {
    limit = parseInt(sanitize(req.query['articlePerPage']));
    if (limit === NaN || limit <= 0 || limit > MAGICNUM.MAX_SAFE_QUERY_LENGTH) {
      console.log('400 Bad Request - limit must be a positive integer');
      return res.status(400).json({ code: 3, message: 'Limit must be a positive integer' });
    }
  }

  let offset = 0;
  if (req.query['currentPage']) {
    offset = parseInt(sanitize(req.query['currentPage']));
    if (offset === NaN || offset <= 0 || offset > MAGICNUM.MAX_SAFE_QUERY_LENGTH) {
      console.log('400 Bad Request - offset must be a positive integer');
      return res.status(400).json({ code: 4, message: 'Offset must be a positive integer' });
    }
    offset -= 1;
  }

  //create SQL Clause corresponding to query
  const whereArr: string[] = [];
  if (username) whereArr.push(`username = '${username}'`);
  if (articlename) whereArr.push(`articlename LIKE '%${articlename}%'`);
  if (articletext) whereArr.push(`articletext LIKE '%${articletext}%'`);
  const whereClause: string = whereArr.length ? ` WHERE ${whereArr.join(' AND ')}` : '';
  const orderbyClause: string = orderby ? ` ORDER BY created_at ${orderby}` : ``;
  let limitClause: string = '';
  if (limit) {
    limitClause = ` LIMIT ${limit}`;
    if (offset) {
      limitClause += ` OFFSET ${limit * offset}`;
    }
  }
  const query: string = `SELECT * from Article${whereClause}${orderbyClause}${limitClause};`;
  console.log(query);

  //execute query
  db.all(query, (err: Error, rows: any) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ code: 5, message: 'Internal Server Error' });
    }
    cache.set(req.url, rows);
    return res.status(200).json(rows);
  });
};

export default list;
