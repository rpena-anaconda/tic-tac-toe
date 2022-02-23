import React, { useState } from 'react'
import Square from './Square';

// type PlayableValues = 'x' | 'o'

const SIZE = 3;

function Board() {
    const [squares, setSquares] = useState(Array(SIZE * SIZE).fill(null))
    const [isX, setIsX] = useState(true);

    const processClickEvent = (placement) => {
        const value = isX ? 'X' : 'O';

        // Update Squares
        let updatedSquares = [...squares];
        updatedSquares[placement] = value;
        setSquares(updatedSquares);

        // Update Playable Value
        setIsX(!isX);
    };

    console.log('squares', squares)
    return (
        <>
            <div className='mb-4'>
                <p>
                    <span className='text-xl mr-1'>Current Play:</span> <span className='text-2xl'>{isX ? 'X' : 'O'}</span>
                </p>
            </div>

            <hr />
            <div className="grid grid-cols-3 gap-3">
                {squares.map((e, i) => (
                    <Square
                        key={i}
                        processClickEvent={processClickEvent}
                        placement={i}
                        value={e}
                    />
                ))}
            </div>
        </>
    )
}

export default Board