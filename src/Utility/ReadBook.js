import { toast } from "react-toastify";
const getBookData = () => {
  let bookData = [];
  const storedBookData = localStorage.getItem("book-data");
  if (storedBookData) {
    bookData = JSON.parse(storedBookData);
  }
  return bookData;
};

const getWishList = () => {
  const wishList = localStorage.getItem("wish-list");
  if (wishList) {
    return JSON.parse(wishList);
  }
  return [];
};

const saveBookData = (e) => {
  let bookData = getBookData();
  const exists = bookData.find((data) => data.bookId == e.bookId);
  if (exists) {
    return toast.error("acey");
  }
  bookData.push(e);
  localStorage.setItem("book-data", JSON.stringify(bookData));
  toast.success("available");
};
const saveWishList = (e) => {
  const wishList = getWishList();
  const exists = wishList.find((wish) => wish.bookId == e.bookId);
  if (exists) {
    return toast.error("collected");
  }

  wishList.push(e);
  localStorage.setItem("wish-list", JSON.stringify(wishList));
  toast.success("congress");
};

export { getBookData, saveBookData };
export { getWishList, saveWishList };
