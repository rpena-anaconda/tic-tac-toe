import React, { useState } from 'react'
import Square from './Square';
import InputSize from './InputSize';
import { calculateWinner, freshTable } from '../helpers';
import Winner from './Winner'

// type PlayableValues = 'x' | 'o'

function Board() {
    const [isWinner, setIsWinner] = useState(false);
    const [size, setSize] = useState(3);
    const [squares, setSquares] = useState(freshTable(size))
    const [isX, setIsX] = useState(true);

    const handleUpdateSize = (updatedSize) => {
        if (typeof updatedSize === 'string' && updatedSize.length === 0) {
            setSize(updatedSize);
        } else {
            setSize(parseInt(updatedSize));
        }

        setSquares(freshTable(updatedSize));
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
            return;
        }

        // Update Playable Value
        setIsX(!isX);
    };

    const restartGame = () => {
        setIsWinner(false);
        setSquares(freshTable(size));
        setIsX(true);
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
                    <Winner restartGame={restartGame} />
                }

                <div className={`grid my-grid-${size}`}>
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