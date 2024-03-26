import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root/Root";
import Home from "./Pages/Home/Home";
import ListedBooks from "./Pages/ListedBooks/ListedBooks";
import ErrorPages from "./Pages/ErrorPages/ErrorPages";
import PagesToRead from "./Pages/PagesToRead/PagesToRead";
import ReadBooks from "./Components/ReadBooks/ReadBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/book",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/books/:id",
        element: <ReadBooks></ReadBooks>,
        loader: () => fetch("/book.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
