import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdInsertPageBreak } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
const ReadBook = ({book}) => {
    console.log(book)
    const {image, bookName, author, tags, yearOfPublishing, totalPages, publisher} = book
    return (
        <div className="flex  bg-base-100 shadow-xl mt-10 border-2 h-full">
    
      <figure className="m-6 rounded-lg h-full bg-[#F3F3F3]">
        <img className="p-3  h-[350px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body space-y-5">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <p className="text-[#131313CC] text-xl font-semibold max-h-8">By: {author}<span className="font-bold"></span></p>
        <div className="flex items-center justify-start w-2/5 gap-6 text-center">
            <p className="text-2xl font-bold">Tag:</p>
            {
                tags.map(tag=> <p className="text-[#23BE0A] bg-[#F3F3F3] rounded-3xl font-medium text-xl p-2 flex items-center justify-center"># <span>{tag}</span></p>)
                
            }
            <p className="flex items-center gap-2 font-medium text-xl text-[#131313CC]"><CiLocationOn className="text-3xl"></CiLocationOn> Year of Publishing: <span>{yearOfPublishing}</span></p>
        </div>
        <div className="flex items-center text-[#131313CC] text-xl font-semibold w-1/3">
            <p className="flex items-center gap-2 text-xl font-medium"><AiOutlineUsergroupAdd className="text-3xl"></AiOutlineUsergroupAdd> Publishers: {publisher}</p>
            <p className="flex items-center gap-2 text-xl font-medium"><MdInsertPageBreak className="text-3xl"></MdInsertPageBreak> Page: {totalPages}</p>
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

export default ReadBook;