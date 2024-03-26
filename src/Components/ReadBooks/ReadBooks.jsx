import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveBookData, saveWishList } from "../../Utility/ReadBook";
const ReadBooks = () => {
    const readBooksData = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const bookData = readBooksData.find(data => data.bookId === intId);
    const handleReadBook = (bookId) => {
      saveBookData(bookId)
    }
    const handleWishList = (bookId) => {
      saveWishList(bookId)
    }
    
  return (
    <div className="flex  bg-base-100 shadow-xl mt-10 border-2 h-full">
    
      <figure className="m-6 rounded-lg h-full bg-[#F3F3F3] w-2/5">
        <img className="p-3 w-full h-[650px]" src={bookData.image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-5">
        <h2 className="card-title text-3xl font-bold">{bookData.bookName}</h2>
        <p className="text-[#131313CC] text-xl font-semibold max-h-8">By: <span className="font-bold">{bookData.author}</span></p>
        <hr />
        <p className="text-xl font-bold text-[#131313CC] max-h-8">{bookData.category}</p>
        <hr />
        <p className="text-2xl font-bold text-[#131313CC] max-h-20">Review: <span className="font-semibold">{bookData.review}</span></p>
        <div className="flex items-center justify-start w-2/5 gap-6 text-center">
            <p className="text-2xl font-bold">Tag:</p>
            {
                bookData.tags.map((tag, ind)=> <p key={ind} className="text-[#23BE0A] bg-[#F3F3F3] rounded-3xl font-medium text-xl p-2 flex items-center justify-center"># <span>{tag}</span></p>)
                
            }
            {/* <p className="flex items-center gap-2 font-medium text-xl text-[#131313CC]"><CiLocationOn className="text-3xl"></CiLocationOn> Year of Publishing: <span>{bookData.yearOfPublishing}</span></p> */}
        </div>
        {/* <div className="flex items-center text-[#131313CC] text-xl font-semibold w-1/3">
            <p className="flex items-center gap-2 text-xl font-medium"><AiOutlineUsergroupAdd className="text-3xl"></AiOutlineUsergroupAdd> Publishers: {bookData.publisher}</p>
            <p className="flex items-center gap-2 text-xl font-medium"><MdInsertPageBreak className="text-3xl"></MdInsertPageBreak> Page: {bookData.totalPages}</p>
            <p className="flex justify-end items-center gap-2"></p>
        </div> */}
        <hr />
        {/* <div className="flex items-center gap-4 w-1/3 text-center">
            <p className="bg-[#328EFF26] text-[#328EFF] text-xl font-semibold p-3 rounded-3xl">Category: </p>
            <p className="bg-[#FFAC3326] text-[#FFAC33] text-xl font-semibold p-3 rounded-3xl">Rating: </p>
            <button className="btn bg-[#23BE0A] text-white text-xl lg:font-semibold rounded-3xl ">View Details</button>
        </div> */}
        <p className="text-xl font-semibold text-[#131313CC] max-h-20 flex gap-10">Number of Pages: <span className="font-bold">{bookData.totalPages}</span></p>
        <p className="text-xl font-semibold text-[#131313CC] max-h-20 flex gap-28">Publisher: <span className="font-bold">{bookData.publisher}</span></p>
        <p className="text-xl font-semibold text-[#131313CC] max-h-20 flex gap-10">Year of Publishing: <span className="font-bold">{bookData.yearOfPublishing}</span></p>
        <p className="text-xl font-semibold text-[#131313CC] max-h-20 flex gap-36">Rating: <span className="font-bold">{bookData.rating}</span></p>
        <div>
        <Link to="/book">
        <button onClick={() => handleReadBook(bookData)} className="btn bg-white hover:bg-[#23BE0A] w-32 h-14 text-xl font-bold mr-4">Read</button>
        </Link>
        <Link to="/book">
        <button onClick={() => handleWishList(bookData)} className="btn bg-[#59C6D2] w-32 h-14 text-xl font-bold text-white">Wishlist</button>
        </Link>
        </div>
      </div>

    </div>
  );
};

export default ReadBooks;
