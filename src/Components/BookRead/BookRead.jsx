import React from 'react';
import ReadBook from '../ReadBook/ReadBook';

const BookRead = ({bookList}) => {
    
    return(
        <div>
            {
        bookList.map(book=> <ReadBook book={book}></ReadBook>)
    }
        </div>
    )
  
};

export default BookRead;