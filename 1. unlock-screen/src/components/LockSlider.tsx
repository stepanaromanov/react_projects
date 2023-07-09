import React from 'react';
import './LockSlider.css';

type LockSliderProps = {
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    sliderValue: string;
};

const sliderStyle = {
    appearance: "none",
    width: "220px",
    height: "40px",
    background: " rgba(188, 190, 188, 0.5)",
    outline: "none",
    borderRadius: "20px"
} as React.CSSProperties;

const LockSlider = ({ handleInput, sliderValue }: LockSliderProps): JSX.Element => {
    return (
        <input  
            type="range" 
            className="slider mb-2 border-5" 
            style={sliderStyle}
            min="0"
            max="100"
            value={sliderValue}
            onInput={handleInput}
        />
    );
};

export default LockSlider;