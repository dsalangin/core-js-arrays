const { log } = console;

function shiftArray(arr, n) {
  return arr.reduce((acc, item, i) => {
    let newIndex = null;
    if (n > 0) {
      newIndex = i + n + 1 > arr.length ? i + n - arr.length : i + n;
    } else {
      newIndex = i + n < 0 ? i + n + arr.length : i + n;
      log(newIndex);
    }
    acc[newIndex] = item;
    return acc;
  }, []);
}

const arr = [1, 2, 3, 4, 5];

log(shiftArray(arr, 1));

log();
