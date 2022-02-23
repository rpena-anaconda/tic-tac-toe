import React, { useRef } from 'react'

function InputSize({ size, updateSize }) {
    const handleInputChange = (e) => {
        e.preventDefault();

        updateSize(e.target.value);
    };

    return (
        <div>
            <span className='text-xl mr-1'>Size:</span>
            <input
                type="text"
                name="size"
                className='w-10 text-2xl'
                value={size}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default InputSize