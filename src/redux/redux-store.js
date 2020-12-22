import messageReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({  

allMessages: messageReducer,
allPosts: postReducer,
usersPage: usersReducer,
auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;