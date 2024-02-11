const { log } = console;

function createChunks(arr, chunkSize) {
  return arr.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!acc[chunkIndex]) {
      acc.push([]);
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);
}

const arr = [1, 2, 3, 4, 5, 6, 7];

log(createChunks(arr, 3));

log();
