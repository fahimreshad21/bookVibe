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
  let wishList = [];
  const storedWishList = localStorage.getItem("wish-list");
  if (storedWishList) {
    wishList = JSON.parse(storedWishList);
  }
  return wishList;
};

const saveBookData = (book) => {
  let bookData = getBookData();
  const exists = bookData.find((data) => data.bookId === book.bookId);
  if (exists) {
    return toast.error("Book already available");
  }
  bookData.push(book);
  localStorage.setItem("book-data", JSON.stringify(bookData));
  toast.success("Book saved successfully");
};

const saveWishList = (book) => {
  const saveData = getBookData();
  const wishList = getWishList();
  const existsReadBooks = saveData.find((read) => read.bookId === book.bookId);
  if (existsReadBooks) {
    return toast.error("Book already added to read books");
  }
  const existsWishList = wishList.find((wish) => wish.bookId === book.bookId);
  if (!existsWishList) {
    wishList.push(book);
    localStorage.setItem("wish-list", JSON.stringify(wishList));
    toast.success("Book added to wishlist");
  } else {
    return toast.error("Book already in wishlist");
  }
};

export { getBookData, saveBookData };
export { getWishList, saveWishList };
