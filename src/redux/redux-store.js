import messageReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import { createStore, combineReducers } from "redux";


let reducers = combineReducers({  

allMessages: messageReducer,
allPosts: postReducer

})
let store = createStore(reducers);


export default store;