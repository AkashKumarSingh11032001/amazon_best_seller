import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'

const Person = () => {
    return <h4>Jordan Moore </h4>;
}

const Title = () => {
    return <h2>Interesting Facts For Curious Minds</h2>;
}

const Image = () => {
    return (
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
        alt="Interesting Facts For Curious Minds"
      />
    );
}

const Book = () => {
  return (
    <article className='book'>
    <Person />
    <Image />
    <Title />
    </article>
  )
}

const BookList = () => {
    return (
      <section className='booklist'>
        <Book />
        <Book />
        <Book />
      </section>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);