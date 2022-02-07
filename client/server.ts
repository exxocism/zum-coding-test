const { exec, ExecException } = require('child_process');

exec('npx webpack', (error: typeof ExecException | null, stdout: string, stderr: string) => {
  if (error) return console.error(error);
  console.log(stdout);
  console.error(stderr);
});
console.log('==========================================================');
console.log('         zum-coding-repo compiler: Compiling...');
console.log('==========================================================');
