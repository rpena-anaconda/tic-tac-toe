import React from 'react'
import Square from './Square';

const SIZE = 3;

function Board() {
    const arr = [...Array(SIZE * SIZE)];

    return (
        <div class="grid grid-cols-3 gap-3">
            {arr.map((e, i) => (
                <Square key={i} />
            ))}
        </div>
    )
}

export default Board