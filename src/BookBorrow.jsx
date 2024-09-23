export const borrowBook = (bookId, userId) => (dispatch, getState) => {
  const { books, borrowedBooks } = getState().books;
  const { penalties, currentUser } = getState().user;

  if (penalties[userId] || borrowedBooks[bookId]) {
    alert("You cannot borrow this book right now.");
    return;
  }

  const userBorrowedCount = Object.values(borrowedBooks).filter(
    (uid) => uid === userId
  ).length;
  if (userBorrowedCount >= 3) {
    alert("You cannot borrow more than 3 books.");
    return;
  }

  // Borrow the book
  dispatch({ type: "BORROW_BOOK", payload: { bookId, userId } });
};
