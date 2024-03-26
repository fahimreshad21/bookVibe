import React from 'react';
import ReadBook from '../ReadBook/ReadBook';

const BookRead = ({bookList}) => {
    
    return(
        <div>
            {
        bookList.map((book, ind)=> <ReadBook key={ind} book={book}></ReadBook>)
    }
        </div>
    )
  
};

export default BookRead;