import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <>
      <div>React Tutorial</div>
      <ul>
        <a href="#">Click me!</a>
      </ul>
      <div>Don't click me</div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
