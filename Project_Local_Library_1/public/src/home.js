const { sortAccountsByLastName } = require("./accounts");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) { 
  return books.reduce((acc, book) => {
  if (book.borrows[0].returned === false) {
    acc++;
  }
  return acc;
}, 0);
}


function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if(obj[keyA]>obj[keyB]){
      return -1;
    } else if(obj[keyB]>obj[keyA]) {
      return 1;
    }
    return 0;
  })
}


function getMostCommonGenres(books) {
  let genreCount = books.reduce((acc, {genre}) => {
    if (acc[genre]) {
      acc[genre]+=1;
    } else{
      acc[genre]=1;
    }
    return acc;
  }, {})
  let sortedKeys = _sortObjectByValues(genreCount);
  return sorted = sortedKeys.map((key) => ({name: key, count: genreCount[key]})).slice(0,5);
}

function getMostPopularBooks(books) {
  return popularBooks =
    books.map((book) => 
  {return { name: book.title, count: book.borrows.length };})
  .sort(function (bookA, bookB) {
        return bookB.count - bookA.count;
      }).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  return authorList = books.reduce((acc, book) => { 
    const { authorId, borrows } = book;
    const authorObj = authors.find(author => author.id === authorId);
    const name = `${authorObj.name.first} ${authorObj.name.last}`;
    const count = borrows.length;
    const authExists = acc.find(auth => auth.name === name);
    if(authExists) {
      authExists.count += count;
    } else {
      const newAuthEntry = {
        name,
        count
      };
      acc.push(newAuthEntry);
    }
    return acc;
  }, []).sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
