import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <>
      <div>React Tutorial</div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
