import React, { useState } from 'react'
import Square from './Square';
import InputSize from './InputSize';
import { calculateWinner } from '../helpers';

// type PlayableValues = 'x' | 'o'

function Board() {
    const [isWinner, setIsWinner] = useState(false);
    const [size, setSize] = useState(3);
    const [squares, setSquares] = useState(Array(size * size).fill(null))
    const [isX, setIsX] = useState(true);

    const handleUpdateSize = (udpatedSize) => {
        setSize(udpatedSize);
    };

    const processClickEvent = (placement) => {
        const value = isX ? 'X' : 'O';

        // Update Squares
        let updatedSquares = [...squares];
        updatedSquares[placement] = value;
        setSquares(updatedSquares);

        const winner = calculateWinner(updatedSquares, size);
        if (winner) {
            setIsWinner(true)
        }

        // Update Playable Value
        setIsX(!isX);
    };

    return (
        <>
            <div className='mb-4 flex justify-between'>
                <div>
                    <span className='text-xl mr-1'>Current Play:</span> <span className='text-2xl'>{isX ? 'X' : 'O'}</span>
                </div>

                <InputSize size={size} updateSize={handleUpdateSize} />
            </div>

            <div className='board relative'>
                {isWinner &&
                    <div className='absolute w-full h-full bg-gray-50'>
                        <div className='text-3xl text-center relative top-1/4'>Winner!</div>
                    </div>
                }

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
            </div>
        </>
    )
}

export default Board