const sleep = second => {
  const cutdown = Date.now();
  while(Date.now() - cutdown < second * 1000) {}
}

let X = 0, Y = 0;

while(1) {
  process.stdout.write(`X=${X}, Y=${Y}\n`);

  // const Y1 = X & Y ? 0 : (X ? X : (Y ? 0 : 1));
  const Y1 = X & Y ? 0 : (!X && Y ? 0 : 1);
  const X1 = X & Y ? 0 : X ^ Y;

  Y = Y1;
  X = X1;

  sleep(1);
}
