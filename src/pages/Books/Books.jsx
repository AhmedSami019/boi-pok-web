import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ booksData }) => {

  return (
    <div>
      <h1>there are some books to read</h1>
      <Suspense fallback="loading..........">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {booksData.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
