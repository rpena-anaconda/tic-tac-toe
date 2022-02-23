export function calculateWinner(size) {
    const squares = Array(size * size).fill(null).map((e, i) => i);
    const horizontals = sliceChunksHorizontally([...squares], size);
    const verticals = sliceChunksVertically([...squares], size);
    const diagonals = getDiagonals([...squares], size);
    const winningPlays = [...horizontals, ...verticals, ...diagonals];

}

export function getDiagonals(arr, size) {
    const center = Math.floor(arr.length / 2);
    // Left Diagonal
    let startLeft = [];
    for (let i = 0; i < arr.length; i += size + 1) {
        startLeft.push(i);
    }

    // Right Diagonal
    let startRight = [...startLeft];
    for (let i = 0; i < size; i++) {
        let val = startRight[i];

        if (val === center) {
            continue;
        }

        if (val < center) {
            startRight[i] = val + (size - 1);
        } else {
            startRight[i] = val - (size - 1);
        }
    }

    return [[...startLeft], [...startRight]];
}

export function sliceChunksVertically(arr, chunkSize) {
    let res = [];

    for (let i = 0; i < chunkSize; i++) {
        let temp = [i];
        for (let j = i + chunkSize; j < arr.length; j += chunkSize) {
            temp.push(j);
        }
        res.push(temp)
    }
    return res;
}

export function sliceChunksHorizontally(arr, chunkSize) {
    let res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}