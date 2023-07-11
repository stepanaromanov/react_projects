import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from "react-icons/bs";

type UiPropsType = {
  bg?: string;
  shadow?: string;
  transitions?: string;
  opacity?: number;
  showSearchIcon?: boolean;
  showSearchBar?: boolean;
  borderBottomColor?: string;
};

const HiddenSearchBarApp = () => {
  const [uiProps, setUiProps ] = useState<UiPropsType>({
    bg: "#fb8500",
    shadow: "",
    transitions: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: '#fff',
  });

  const bodyStyle = document.body.style;

  const inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `2px solid ${uiProps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "#fff",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: uiProps.opacity,
    transitions: "all .3s ease",
  } as React.CSSProperties;

  const bsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  } as React.CSSProperties;

  //const inputEl = React.createRef<HTMLInputElement>();
  //const inputEl = useRef(document.createElement("input"));
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uiProps.bg) {
      bodyStyle.background = uiProps.bg;
    }

    if (uiProps.shadow) {
      bodyStyle.boxShadow = uiProps.shadow;
    }

    if (uiProps.transitions) {
      bodyStyle.transition = uiProps.transitions;    
    }
    uiProps.showSearchBar && inputEl.current?.focus();
  }, [uiProps.showSearchBar, uiProps.shadow]);

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    });
  };

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
      borderBottomColor: "#219ebc",
    });
  };

  const handleSearchBlur = () => {
    setUiProps({
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };

  return (
    <div className='container' style={{height: "100vh"}}>
      {uiProps.showSearchIcon ? (
        <BsSearch
            style={bsSearchStyle} 
            onClick={showSearch}
        />
      ) : (<input 
              type="text"
              placeholder='Search'
              style={inputStyle}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              ref={inputEl}
          />
      )}
    </div>
  );
};

export default HiddenSearchBarApp;