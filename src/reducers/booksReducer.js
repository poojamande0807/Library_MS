import { database } from "../database/db";

const initialState = {
  books: database.books,
  borrowedBooks: {},
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, books: action.payload };

    case "BORROW_BOOK":
      return {
        ...state,
        borrowedBooks: {
          ...state.borrowedBooks,
          [action.payload.bookId]: action.payload.userId,
        },
      };

    case "RETURN_BOOK":
      const updatedBorrowedBooks = { ...state.borrowedBooks };
      delete updatedBorrowedBooks[action.payload.bookId];
      return { ...state, borrowedBooks: updatedBorrowedBooks };

    default:
      return state;
  }
};

export default bookReducer;
