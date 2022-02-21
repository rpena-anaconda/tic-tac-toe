import React from 'react'

function Square({ processClickEvent, placement, value }) {
    const handleClick = (e) => {
        e.preventDefault();
        processClickEvent(placement);
    };

    return (
        <div
            className='p-10 rounded-lg shadow-lg bg-fuchsia-100'
            onClick={handleClick}
        >
            {value}
        </div>
    )
}

export default Square