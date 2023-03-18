import React from 'react'
import ReactDOM from "react-dom/client";

const Person = () => {
    return <h1>The Great Akash</h1>
}

const Title = () => {
    return <h3>Let the Past Overcome</h3>
}

const Image = () => {
    return <h2>Image place holder</h2>
}

const Book = () => {
  return (
    <>
    <Person />
    <Image />
    <Title />
    </>
  )
}

const BookList = () => {
    return (
      <section>
        <Book />
        <Book />
        <Book />
      </section>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);