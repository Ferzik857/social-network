import { connect } from "react-redux";
import Users from "./Users";

let f1 = (state)=>{
return{
    users:state.usersPage.users
}
}
let f2 = (dispatch)=>{
    return{
        follow: (userId)=> {
            dispatch({type:"FOLLOW", userId: userId})
        },
        unfollow: (userId)=> {
            dispatch({type:"UNFOLLOW", userId: userId})
        },
        setUsers:(userId)=> {
            dispatch({type:"SET_USERS", users: users})}
    }
}


export default connect(f1,f2)(Users)