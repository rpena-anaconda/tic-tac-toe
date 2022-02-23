export function freshTable(size) {
    return Array(size * size).fill(null);
}

export function addTableNumbers(squares) {
    return [...squares].map((e, i) => i);
}

export function calculateWinner(squares, size) {
    const tempSquares = addTableNumbers(freshTable(size));
    const horizontals = sliceChunksHorizontally([...tempSquares], size);
    const verticals = sliceChunksVertically([...tempSquares], size);
    const diagonals = getDiagonals([...tempSquares], size);
    const winningPatterns = [...horizontals, ...verticals, ...diagonals];

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c, d, e, f, g, h] = winningPatterns[i];

        switch (size) {
            case 3:
                if (
                    squares[a] &&
                    squares[a] === squares[b] &&
                    squares[a] === squares[c]
                ) {
                    return true;
                }
                break;
            case 4:
                if (
                    squares[a] &&
                    squares[a] === squares[b] &&
                    squares[a] === squares[c] &&
                    squares[a] === squares[d]
                ) {
                    return true;
                }
                break;
            case 5:
                if (
                    squares[a] &&
                    squares[a] === squares[b] &&
                    squares[a] === squares[c] &&
                    squares[a] === squares[d] &&
                    squares[a] === squares[e]
                ) {
                    return true;
                }
                break;
            case 6:
                if (
                    squares[a] &&
                    squares[a] === squares[b] &&
                    squares[a] === squares[c] &&
                    squares[a] === squares[d] &&
                    squares[a] === squares[e] &&
                    squares[a] === squares[f]
                ) {
                    return true;
                }
                break;
            case 7:
                if (
                    squares[a] &&
                    squares[a] === squares[b] &&
                    squares[a] === squares[c] &&
                    squares[a] === squares[d] &&
                    squares[a] === squares[e] &&
                    squares[a] === squares[f] &&
                    squares[a] === squares[g]
                ) {
                    return true;
                }
                break;
            case 8:
                if (
                    squares[a] &&
                    squares[a] === squares[b] &&
                    squares[a] === squares[c] &&
                    squares[a] === squares[d] &&
                    squares[a] === squares[e] &&
                    squares[a] === squares[f] &&
                    squares[a] === squares[g] &&
                    squares[a] === squares[h]
                ) {
                    return true;
                }
                break;
            default:
        }
    }

    return false;
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