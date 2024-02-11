const { log } = console;

function getIdentityMatrix(n) {
  const identityMatrix = [];
  for (let i = 0; i < n; i += 1) {
    const row = Array(n).fill(0);
    row[i] = 1;
    identityMatrix.push(row);
  }
  return identityMatrix;
}

function ngetIdentityMatrix(n) {
  return new Array(n).fill('').reduce((acc, item, i) => {
    const innerArr = Array(n).fill(0);
    innerArr[i] = 1;
    return [...acc, innerArr];
  }, []);
}

// const arr = [1, 2, 3, 4, 5, 6, 7];

log(getIdentityMatrix(3));
log(ngetIdentityMatrix(3));

log(new Array(3).forEach((i) => log(i)));
