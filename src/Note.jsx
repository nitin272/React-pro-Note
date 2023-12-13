import React, { useState } from 'react';
import './Note.css';

const Note = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={handleChange} value={value} />
                </div>
                <div className="output">
                    <h3 className="out">Pro Note</h3>
                    <div className="output-text">{value}</div>
                </div>
            </div>
        </>
    );
};

export default Note;
