import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";

const WishLists = ({wish}) => {
    const {bookId, image, bookName, author, tags, yearOfPublishing, totalPages, publisher, rating, category} = wish;
    return (
        <div className="flex flex-col lg:flex-row bg-base-100 shadow-xl mt-4 lg:mt-10 border-2 h-full lg:w-4/5 mx-auto rounded-lg">
      <figure className="m-6 rounded-lg h-full bg-[#F3F3F3]">
        <img className="p-3 " src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-3 lg:space-y-7">
        <h2 className="card-title text-4xl font-bold">{bookName}</h2>
        <p className="text-[#131313CC] text-2xl font-semibold max-h-8">By: {author}<span className="font-bold"></span></p>
        <div className="flex flex-col lg:flex-row items-center justify-start lg:w-4/5 lg:gap-6 text-center space-y-2">
            <div className='flex items-center gap-4'>
            <p className="text-xl lg:text-2xl font-bold">Tag:</p>
            {
                tags.map(tag=> <p className="text-[#23BE0A] bg-[#F3F3F3] rounded-3xl font-medium lg:text-2xl p-2 flex items-center justify-center"># <span>{tag}</span></p>)
                
            }
            </div>
            <p className="flex items-center gap-2 font-medium text-2xl text-[#131313CC]"><CiLocationOn className="text-3xl"></CiLocationOn> Year of Publishing: <span>{yearOfPublishing}</span></p>
        </div>
        <div className="flex flex-col lg:flex-row items-center text-[#131313CC]  lg:text-2xl font-semibold lg:w-2/3 space-y-2">
            <p className="flex items-center gap-2 text-xl lg:text-2xl font-medium"><AiOutlineUsergroupAdd className="text-3xl"></AiOutlineUsergroupAdd> <span>Publishers: {publisher}</span></p>
            <p className="flex items-center gap-2 text-xl lg:text-2xl font-medium"><MdInsertPageBreak className="text-3xl"></MdInsertPageBreak> Page: {totalPages}</p>
            <p className="flex justify-end items-center gap-2"></p>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:w-2/3 text-center">
            <p className="bg-[#328EFF26] text-[#328EFF] text-2xl font-semibold p-3 rounded-3xl w-full lg:w-auto">Category: {category}</p>
            <p className="bg-[#FFAC3326] text-[#FFAC33] text-2xl font-semibold p-3 rounded-3xl w-full lg:w-auto">Rating: {rating}</p>
            <Link to={`/books/${bookId}`}><button className="btn bg-[#23BE0A] text-white text-2xl lg:font-semibold rounded-3xl  w-full lg:w-auto">View Details</button></Link>
        </div>
        
      </div>

    </div>
    );
};

export default WishLists;