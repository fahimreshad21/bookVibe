
import BooksCard from "../BooksCard/BooksCard";

const Books = ({books}) => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-24 mb-8">Books</h1>
            <div className="grid lg:grid-cols-3 gap-10">
            {
                books.map(book => <BooksCard key={book.bookId} book={book}></BooksCard>)
            }
            </div>
            
        </div>
    );
};

export default Books;