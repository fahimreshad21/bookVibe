import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdInsertPageBreak } from "react-icons/md";
const ReadBooks = () => {
    const readBooksData = useLoaderData();
    console.log(readBooksData)
    const {id} = useParams();
    const intId = parseInt(id);
    const bookData = readBooksData.find(data => data.bookId === intId)
    console.log(bookData)


  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10 border-2">
    
      <figure className="m-6 rounded-lg bg-[#F3F3F3]">
        <img className="p-3 h-[300px]" src={bookData.image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-5">
        <h2 className="card-title text-3xl font-bold">{bookData.bookName}</h2>
        <p className="text-[#131313CC] text-xl font-semibold max-h-10">By: <span>{bookData.author}</span></p>
        <div className="flex items-center justify-start w-2/5 gap-8 text-center">
            <p className="text-2xl font-bold">Tag:</p>
            {
                bookData.tags.map(tag=> <p className="text-[#23BE0A] bg-[#F3F3F3] rounded-3xl font-medium text-xl p-2"> {tag}</p>)
                
            }
            <p className="flex items-center gap-2 font-medium text-xl text-[#131313CC]"><CiLocationOn className="text-3xl"></CiLocationOn> Year of Publishing: <span>{bookData.yearOfPublishing}</span></p>
        </div>
        <div className="flex items-center text-[#131313CC] text-xl font-semibold w-1/3">
            <p className="flex items-center gap-2 text-xl font-medium"><AiOutlineUsergroupAdd className="text-3xl"></AiOutlineUsergroupAdd> Publishers: {bookData.publisher}</p>
            <p className="flex items-center gap-2 text-xl font-medium"><MdInsertPageBreak className="text-3xl"></MdInsertPageBreak> Page: {bookData.totalPages}</p>
            <p className="flex justify-end items-center gap-2"></p>
        </div>
        <hr />
        <div className="flex items-center gap-4 w-1/3 text-center">
            <p className="bg-[#328EFF26] text-[#328EFF] text-xl font-semibold p-3 rounded-3xl">Category: </p>
            <p className="bg-[#FFAC3326] text-[#FFAC33] text-xl font-semibold p-3 rounded-3xl">Rating: </p>
            <button className="btn bg-[#23BE0A] text-white text-xl lg:font-semibold rounded-3xl ">View Details</button>
        </div>
      </div>

    </div>
  );
};

export default ReadBooks;
