import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'

const Person = (props) => {
    return <h4>{props.person}</h4>;
}

const Title = (props) => {
    return <h2>{props.title}</h2>;
}

const Image = () => {
    return (
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
        alt="Interesting Facts For Curious Minds"
      />
    );
}

const Book = (props) => {
  
  return (
    <article className='book'>
    <Image />
    <Person person={props.person}/>
    <Title title={props.title}/>
    </article>
  )
}

const BookList = () => {
  const title_1 = "Interesting Facts For Akash Minds";
  const person_1 = "Akash Singh"
  const title_2 = "Akash Minds";
  const person_2 = "AKS"
  const title_3 = "Good Improvement";
  const person_3 = "Singh Akash";
  return (
    <section className="booklist">
      <Book title={title_1} person={person_1} />
      <Book title={title_2} person={person_2} />
      <Book title={title_3} person={person_3} />
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);