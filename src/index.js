import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'

const Person = (props) => {
    return <h4>{props.person}</h4>;
}

const Title = (props) => {
    return <h2>{props.title}</h2>;
}

const Image = (props) => {
    return (
      <img
        src={props.img}
        alt="Interesting Facts For Curious Minds"
      />
    );
}

const Book = (props) => {
  
  return (
    <article className='book'>
    <Image img={props.img}/>
    <Person person={props.person}/>
    <Title title={props.title}/>
    </article>
  )
}

const firstBook = {
  title: "Interesting Facts For Akash Minds",
  person: "Jordan Moore",
  img: "https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
};
const secondBook = {
  title: "Atomic Habits",
  person: "James Clear",
  img: "https://m.media-amazon.com/images/I/419hlQBPe6L._SY346_.jpg",
};
const thirdBook = {
  title: "The 5 AM Club",
  person: "Robin Sharma",
  img: "https://m.media-amazon.com/images/I/41MC15v6UIL._SY344_BO1,204,203,200_.jpg",
};

const BookList = () => {
  
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        person={firstBook.person}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        person={secondBook.person}
        img={secondBook.img}
      />
      <Book
        title={thirdBook.title}
        person={thirdBook.person}
        img={thirdBook.img}
      />
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);