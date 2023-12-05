import React, { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useState(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:8800/books");
        const data = await res.json();
        setBooks(data);
        console.log(data);
        console.log(books);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);
  return <div>Books</div>;
};

export default Books;
