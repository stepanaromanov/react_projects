import React, { useState }  from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/lock.jpg";
import HomeScreenImg from "./img/home.jpg";

const SlideToUnlock = () => {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`
  });
  
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState("0");

  const handleLockSliderInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value === "100") {
      setShowLockSlider(false);
      setUiProps({
        uiText: "Welcome",
        uiColor: "#eee",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`
      });
    } 
    setLockSliderValue(event.target.value);
  };

  return (
    <div className='container text-center d-flex flex-column border-20 shadow-md'
    style={{
      marginTop: "15vh",
      width: 270,
      height: 602,
      border:"4px solid #000",
      background: uiProps.uiBg,
    }}>
        <h1 className='title' style={{
          color: uiProps.uiColor, 
          fontSize: "3rem", 
          marginBottom: "30vh"}}>{uiProps.uiText}</h1>
        {showLockSlider ? (
          <LockSlider 
            handleInput={handleLockSliderInput} 
            sliderValue={lockSliderValue}
          />
        ) : (
          <AiFillUnlock className='unlockIcon' /> 
        )}
    </div>
  );
};

export default SlideToUnlock;