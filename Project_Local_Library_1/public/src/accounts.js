function findAccountById(accounts, id) {
  return found = accounts.find((theAccount) => theAccount.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, {borrows}) => {
    if (borrows.some((borrow) => borrow.id === account.id)) {
      acc++;
    }
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = books.filter(({borrows}) => {
    return borrows.some((borrow) => borrow.id === account.id && borrow.returned === false)
  });
  return newArr = checkedOutBooks.map(book => {
    let author = authors.find(author => book.authorId === author.id)
    return {author, ...book}
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
