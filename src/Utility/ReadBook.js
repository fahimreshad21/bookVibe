const getBookData = () => {
    const bookData = localStorage.getItem('book-data');
    if(bookData){
        return JSON.parse(bookData);
    }
    return [];
}

const getWishList = () => {
    const wishList = localStorage.getItem('wish-list');
    if(wishList){
        return JSON.parse(wishList);
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
const saveWishList = e => {
    const wishList = getWishList();
    const exists = wishList.find(data => data === e);
    if(!exists){
        wishList.push(e);
        localStorage.setItem('wish-list', JSON.stringify(wishList))
    }
}

export {getBookData, saveBookData}
export {getWishList, saveWishList}