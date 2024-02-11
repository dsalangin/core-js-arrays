const { log } = console;

function swapHeadAndTail(arr) {
  if (arr.length < 2) return arr;
  const half = arr.length / 2;
  const middle = half % 1 === 0 ? half : Math.floor(half) + 1;
  const head = arr.filter((_, i) => i < Math.floor(half));
  const tail = arr.filter((_, i) => i >= middle);
  return half % 1 !== 0 ? [...tail, middle, ...head] : [...tail, ...head];
}

const arr = [1, 2, 3, 4];

log(swapHeadAndTail(arr));

log();
