import { IoMdStarHalf } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, bookId, author, image, category, tags, rating } = book;

  return (
    <Link to={`/bookDetail/${bookId}`}>
        <div className="card bg-base-100 shadow-sm border-2 border-gray-100">
      <div>
        <figure className="px-5 py-5 bg-gray-100 m-5 rounded-xl">
          <img
            src={image}
            alt="Shoes"
            className="rounded-lg h-[166px] m-10 shadow-xl"
          />
        </figure>
      </div>
      <div className="card-body">
      <div className="card-actions justify-start">
          {
            tags.map(tag => <div key={tag.index} className="badge badge-outline">{tag}</div>)
          }          
        </div>
        <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
        <p className="text-md font-medium ">
         By : {author}
        </p>
        <div className="card-actions justify-end">
          <div className="badge">{rating} <IoMdStarHalf color="gold" size={20}/></div>
          <div className="badge ">{category}s</div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
