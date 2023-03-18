import React from 'react'
import ReactDOM from "react-dom/client";

const Book = () => {
  return (
    <div>Book</div>
  )
}

const BookList = () => {
    return (
      <>
        <Book />
        <Book />
        <Book />
      </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);