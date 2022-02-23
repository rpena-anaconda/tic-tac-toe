import React from 'react'

function Winner({ restartGame }) {
    const handleRestartGame = (e) => {
        e.preventDefault();
        restartGame();
    };

    return (
        <div className='absolute w-full h-full bg-gray-50'>
            <div className='text-center relative top-1/4'>
                <div className='text-3xl mb-3'>Winner!</div>
                <button className='p-3 rounded-full bg-fuchsia-200' onClick={handleRestartGame}>Restart Game</button>
            </div>
        </div>
    )
}

export default Winner