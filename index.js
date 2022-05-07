const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const placeholder_str =  `
  aaaaaa
d        b
d        b
d        b
d        b
d        b
  cccccc
g        e
g        e
g        e
g        e
g        e
  ffffff
`;

console.log('\x1B[31m%s\x1B[0m', 'Hello World!');
console.log('\x1B[36m%s\x1B[0m', 'Hello World!');

/**
 * 0 0 = 0
 * a = 1, b = 1, c = 0, d = 1，e = 1, f = 1，g = 1
 * 
 * 0 1 = 1
 * a = 0, b = 1, c = 0, d = 0，e = 1, f = 0，g = 0
 * 
 * 1 0 = 2
 * a = 1, b = 1, c = 1, d = 0，e = 0, f = 1，g = 1
 * 
 * 1 1 = 3
 * a = 1, b = 1, c = 1, d = 0，e = 1, f = 1，g = 0
 */
rl.on('line', _d => {
  const [_, x, y] = /^X=(\d)+, Y=(\d)+$/.exec(_d);
  const a = f = x === '0' && y == '1' ? 0 : 1;
  const b = 1;
  const c = x === '0' ? 0 : 1;;
  const d = x === '0' && y === '0' ? 1 : 0;
  const e = x === '1' && y === '0' ? 0 : 1;
  const g = y === '0' ? 1 : 0;
  const color = signal => `\x1B[${signal ? 31 : 2}m#\x1B[0m`;
  console.clear();
  let log_str = placeholder_str
    .replace(/a/g, color(a))
    .replace(/b/g, color(b))
    .replace(/c/g, color(c))
    .replace(/d/g, color(d))
    .replace(/e/g, color(e))
    .replace(/f/g, color(f))
    .replace(/g/g, color(g));
  console.log(log_str);
});
