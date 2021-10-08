import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const ChangeTheme = () => {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();


    // const changeColor = () => {
    //     console.log(color)
    // }

    return (
        <div>
            <input type='color' onChange={(e) => setColor(e.target.value)}/>
            <button onClick={() => dispatch(changeColor(color))}>Change</button>
        </div>
    )
}

export default ChangeTheme
