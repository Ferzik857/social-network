import messageReducer from "./Message-reducer";
import postReducer from "./Post-reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let rootReducers = combineReducers({  
allMessages: messageReducer,
allPosts: postReducer,
usersPage: usersReducer,
auth: authReducer,
form: formReducer,
app: appReducer
})

type rootReducersType = typeof rootReducers
export type AppStateType = ReturnType<rootReducersType>
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes <T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>>
let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));


export default store;