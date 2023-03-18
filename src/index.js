import React from "react";
import ReactDOM from "react-dom/client";


const Person = () => {
    return (
        <div>Who are you?</div>
    );
}

const Answer = () => {
  return <div>My name is Akash!</div>;
};

const Greeting = () => {
  return (
    <>
      <h1>React Tutorial</h1>
      <Person />
      <Answer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
