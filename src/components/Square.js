import React from 'react'

function Square({ processClickEvent, placement, value }) {
    const handleClick = (e) => {
        e.preventDefault();

        // If we have value, Square isn't playable anymore.
        if (value) return;

        processClickEvent(placement);
    };

    return (
        <div
            className={`p-10 rounded-lg shadow-lg bg-fuchsia-200 ${value ? "" : "hover:animate-pulse cursor-pointer"}`}
            onClick={handleClick}
        >
            <div className='block h-4 w-auto text-center'>{value}</div>
        </div>
    )
}

export default Square