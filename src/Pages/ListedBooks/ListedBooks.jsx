import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaAngleDown } from "react-icons/fa";
import BookRead from "../../Components/BookRead/BookRead";
import { useEffect, useState } from "react";
import { getBookData, getWishList } from "../../Utility/ReadBook";
import WishLists from "../../Components/WishLists/WishLists";
const ListedBooks = () => {
  const [bookList, setBookList] = useState([]);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const listedBookRead = getBookData();
    setBookList(listedBookRead);
  }, []);
  useEffect(() => {
    const wishList = getWishList();
    setWishList(wishList);
  }, []);
  const handleRatingSort = () => {
    const sortedData = getBookData();
    const sortedWishList = getWishList();
    const sortedWishListData = sortedWishList.sort((a, b) => {
      return b.rating - a.rating;
    });
    setWishList(sortedWishListData);
    const dataSorted = sortedData.sort((a, b) => {
      return b.rating - a.rating;
    });
    setBookList(dataSorted);
  };
  const handlePagesSort = () => {
    const sortedReadingData = getBookData();
    const sortedWishListData = getWishList();
    const dataSortedWishList = sortedWishListData.sort((a, b) => {
      return b.totalPages - a.totalPages;
    });
    setWishList(dataSortedWishList);
    const dataSorted = sortedReadingData.sort((a, b) => {
      return b.totalPages - a.totalPages;
    });
    setBookList(dataSorted);
  };
  const handlePublishYearSort = () => {
    const publishYearBookSort = getBookData();
    const publishYearWishListSort = getWishList();
    const publishYearWishList = publishYearWishListSort.sort((a, b) => {
      return b.yearOfPublishing - a.yearOfPublishing;
    });
    setWishList(publishYearWishList);
    const publishYear = publishYearBookSort.sort((a, b) => {
      return b.yearOfPublishing - a.yearOfPublishing;
    });
    setBookList(publishYear);
  };
  return (
    <div>
      <div className="text-center space-y-4 lg:space-y-8 mb-8 lg:mb-16">
        <h2 className="bg-base-200 text-5xl font-bold py-6 rounded-xl">
          Books
        </h2>
        <details className="dropdown">
          <summary className="m-1 ml- btn bg-[#23BE0A] text-white text-xl lg:font-semibold h-16 w-40">
            Sort By <FaAngleDown />
          </summary>
          <ul className="-ml-5 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 flex items-center">
            <li className="text-xl font-semibold">
              <a onClick={handleRatingSort}>Rating</a>
            </li>
            <li className="text-xl font-semibold">
              <a onClick={handlePagesSort}>Number of Pages</a>
            </li>
            <li className="text-xl font-semibold">
              <a onClick={handlePublishYearSort}>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <Tabs>
          <TabList className="text-[#131313CC] text-xl font-semibold mt-28">
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <BookRead bookList={bookList}></BookRead>
          </TabPanel>
          <TabPanel>
            {wishList.map((wish, ind) => (
              <WishLists key={ind} wish={wish}></WishLists>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
