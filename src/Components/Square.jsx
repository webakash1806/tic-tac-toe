import React, { useEffect, useState } from 'react'
import { GiCrossedBones } from "react-icons/gi";
import { FaCircleNotch } from "react-icons/fa";
const Square = ({ value, onClick }) => {

    const [val, setVal] = useState()

    const changeVal = () => {
        if (value === 'X') {
            setVal(<GiCrossedBones className='text-[1.9rem] text-[#76D1F9]' />)
        } else if (value === 'O') {
            setVal(<FaCircleNotch className='text-[1.9rem] text-[#DDC145]' />)
        }
    }

    useEffect(() => {
        changeVal()
    }, [value])

    return (
        <button className="size-20 rounded bg-[#431C5D] flex items-center justify-center" onClick={onClick}>
            {val}
        </button>
    );
};

export default Square
