import { useLoaderData } from "react-router-dom";
import Books from "../../Components/Books/Books";
import { useEffect, useState } from "react";

const Home = () => {
    const booksData = useLoaderData();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(booksData);
      },[])
  return (
    <div>
        <div className="lg:flex lg:min-h-[750px] bg-base-200 rounded-lg border py-4">
      <div className="flex flex-col lg:flex-row-reverse w-full justify-evenly items-center">
        <img
          src="/src/assets/Images/banner.png"
          className="lg:max-w-md rounded-lg w-1/2 lg:w-full"
        />
        <div className="space-y-4 lg:space-y-16 text-center lg:text-start">
          <h1 className="text-4xl lg:text-7xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <a className="btn bg-[#23BE0A] text-white text-xl lg:font-semibold">
            View The List
          </a>
        </div>
      </div>
    </div>
    <Books books={books}></Books>
    </div>
  );
};

export default Home;
