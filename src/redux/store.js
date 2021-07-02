import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import onlineUsersReducer from "./reducers/onlineUsersReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ user: userReducer, onlineUsers: onlineUsersReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk))