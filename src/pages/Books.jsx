import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:8800/books");
        const data = await res.json();
        setBooks(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8800/books/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>My library</h1>
      <div className="books">
        {books.map((book, i) => (
          <div className="book" key={i}>
            {book.cover && <img src={book.cover} alt="" />}
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <p>{book.price}</p>
            <button onClick={() => handleDelete(book.id)} className="delete">
              Delete
            </button>
            <button className="Update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <Link to={"/add"} className="addHome">
        Add books
      </Link>
    </>
  );
};

export default Books;
