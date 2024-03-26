import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
  const { bookId, image, bookName, tags, author, category, rating } = book;
  return (
    <div>
      <div className="card shadow-xl rounded-xl border lg:my-8">
        <Link to={`/books/${bookId}`}>
          <figure className="m-6 rounded-lg bg-[#F3F3F3]">
            <img className="p-3 h-[300px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body -mt-6 space-y-2 lg:space-y-5">
            <div className="flex gap-4 text-center">
              {tags.map((tag) => (
                <p className="text-[#23BE0A] bg-[#F3F3F3] rounded-3xl font-medium text-xl p-2">
                  {tag}
                </p>
              ))}
            </div>
            <h2 className="card-title text-3xl font-bold lg:h-10">
              {bookName}
            </h2>
            <p className="text-[#131313CC] text-xl font-semibold border-b-2 border-dashed pb-4">
              By: <span>{author}</span>
            </p>
            <div className="flex items-center justify-between text-[#131313CC] text-xl font-semibold">
              <p>{category}</p>
              <p className="flex justify-end items-center gap-2">
                {rating} <CiStar className="text-3xl font-semibold"></CiStar>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
