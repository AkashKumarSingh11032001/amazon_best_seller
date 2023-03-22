import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {bookList} from "./bookList";
import {Book} from "./book"

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target.value);
    // console.log("You'r typing something on Input box.")
  };
  const handleButtonClick = () => {
    alert("You just clicked search button.");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited!");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2> Search Book </h2>
        <input
          type="text"
          name="bookProduct"
          onClick={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit me</button>
      </form>
      <button onClick={handleButtonClick}>Search</button>
    </section>
  );
};

// const firstBook = {
//   title: "Interesting Facts For Akash Minds",
//   person: "Jordan Moore",
//   img: "https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
// };
// const secondBook = {
//   title: "Atomic Habits",
//   person: "James Clear",
//   img: "https://m.media-amazon.com/images/I/419hlQBPe6L._SY346_.jpg",
// };
// const thirdBook = {
//   title: "The 5 AM Club",
//   person: "Robin Sharma",
//   img: "https://m.media-amazon.com/images/I/41MC15v6UIL._SY344_BO1,204,203,200_.jpg",
// };

const BookList = () => {
  return (
    <section className="booklist">
      {/* <Book
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
      /> */}
      <EventExample />

      {bookList.map((book) => {
        return (
          <Book
            title={book.title}
            person={book.person}
            img={book.img}
            key={book.id}
          />
        );
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
