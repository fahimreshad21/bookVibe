const getBookData = () => {
    const bookData = localStorage.getItem('book-data');
    if(bookData){
        return JSON.parse(bookData);
    }
    return [];
}

const saveBookData = e => {
    const bookData = getBookData();
    const exists = bookData.find(data => data === e);
    if(!exists){
        bookData.push(e);
        localStorage.setItem('book-data', JSON.stringify(bookData))
    }
}

export {getBookData, saveBookData}