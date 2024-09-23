// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import bookReducer from "./reducers/booksReducer";
// import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
  },
  //   middleware: [thunk],
});

export default store;
