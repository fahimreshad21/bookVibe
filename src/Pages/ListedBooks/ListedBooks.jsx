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
  }, [])
  useEffect(() => {
    const wishList = getWishList();
    setWishList(wishList);
  }, [])

  return (
    <div>
      <div className="text-center space-y-4 lg:space-y-8 mb-8 lg:mb-16">
        <h2 className="bg-base-200 text-5xl font-bold py-6 rounded-xl">
          Books{" "}
        </h2>
        <button className="btn bg-[#23BE0A] text-white text-xl lg:font-semibold h-16 w-40 ">
          Sort By <FaAngleDown />
        </button>















      </div>
      <div>
        <Tabs>
          <TabList className="text-[#131313CC] text-xl font-semibold">
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <BookRead bookList={bookList}></BookRead>
          </TabPanel>
          <TabPanel>
            {
              wishList.map((wish, ind)=> <WishLists key={ind} wish={wish}></WishLists>)
            }
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
