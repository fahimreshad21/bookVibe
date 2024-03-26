import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaAngleDown } from "react-icons/fa";
import ReadBooks from "../../Components/ReadBooks/ReadBooks";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
const ListedBooks = () => {
   
  return (
    <div>
      <div className="text-center space-y-8">
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
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
