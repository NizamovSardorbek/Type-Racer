import React from "react";

const Preview = ({ text, userInput }) => {
  const matn = text.split("");

  return (
    <div>
      {matn.map((value, index) => {
        let color;
        if (index < userInput.length) {
          color = value === userInput[index] ? "green" : "red";
        }
        return (
          <span style={{ backgroundColor: color }} key={index}>
            {value}
          </span>
        );
      })}
      {/* <span>change display format</span> */}
    </div>
  );
};

export default Preview;
