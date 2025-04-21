import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetail = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);

  const { bookName, author, image, category, tags, rating, review, publisher, yearOfPublishing, totalPages} =
    singleBook;

  return (
    <div className="my-10 flex justify-between gap-10">
      <div className="bg-gray-200 p-10 rounded-2xl w-1/3">
        <img
          className="w-80 rounded-2xl shadow-xl mx-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-5xl font-semibold mb-5">{bookName}</h1>
        <h4 className="text-xl font-medium">By : {author}</h4>
        <div className="divider"></div>

        <h4 className="text-lg font-semibold">{category}</h4>
        <div className="divider"></div>

        <p className="text-lg mb-5">Review : <small className="font-regular">{review}</small></p>
        <p className="text-lg mb-5 font-medium">Tags : {tags.map(tag=> <small className="text-green-600 font-semibold mx-5">{tag}</small>)}</p>
        <div className="divider"></div>

        <div className="mb-10">
            <p className="text-lg font-medium">Total Pages :     {totalPages}</p>
            <p className="text-lg font-medium">Publisher :       {publisher}</p>
            <p className="text-lg font-medium">Year publishing : {yearOfPublishing}</p>
            <p className="text-lg font-medium">Rating :          {rating}</p>
        </div>
        <button className="text-lg btn bg-gray-300 mr-5">Read</button>
        <button className="text-lg btn btn-primary">Wish List</button>
      </div>
    </div>
  );
};

export default BookDetail;
