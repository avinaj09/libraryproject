function findAuthorById(authors, id) {
  return found = authors.find((theAuthor) => theAuthor.id === id);
}

function findBookById(books, id) {
  return found = books.find((theBook) => theBook.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedArr = books.filter((book) => book.borrows[0].returned === false);
  const unborrowedArr = books.filter((book) => book.borrows[0].returned === true);
  const allBorrowed = [] 
  allBorrowed.push(borrowedArr);
  allBorrowed.push(unborrowedArr);
  return allBorrowed;
}


function getBorrowersForBook(book, accounts) {
  let {borrows} = book;
  return borrows.forEach(borrow=> {
    let account = accounts.find(acc => acc.id === borrow.id);
    account['returned'] = borrow.returned;
    result.push(account);
  }).slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
