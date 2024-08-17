import React, { useState } from "react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayValue(inputValue);
    // Move the comparison here after the state has updated
    if (inputValue === "nihat") {
      console.log("it equals nihat");
    } else {
      console.log("NOT equals nihat");
    }
  };

  return (
    <div>
      <div className="topbar">
        <input
          type="text"
          placeholder="Type a movie..."
          value={inputValue}
          onChange={handleInputChange}
          className="movie-name-input"
        />
        <button className="click-button" onClick={handleClick}>
          Click Me
        </button>
      </div>
      <p>current input value: {displayValue}</p>
    </div>
  );
}

export default Input;
