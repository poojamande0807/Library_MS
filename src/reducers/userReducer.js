import { database } from "../database/db";

const initialState = {
  currentUser: null,
  users: database.users,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "BAN_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
export default userReducer;
