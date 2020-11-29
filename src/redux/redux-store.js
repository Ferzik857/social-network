import messageReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import { createStore, combineReducers } from "redux";
import usersReducer from "./Users-reducer";


let reducers = combineReducers({  

allMessages: messageReducer,
allPosts: postReducer,
usersPage: usersReducer
})
let store = createStore(reducers);


export default store;