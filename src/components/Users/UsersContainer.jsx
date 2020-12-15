import { connect } from "react-redux";
import Users from "./Users";


let f1 = (state)=>{
return{
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage
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
        setUsers:(users)=> {
            dispatch({type:"SET_USERS", users: users})
        },
        setCurrentPage:(currentPage)=> {
                dispatch({type:"SET_CURRENT_PAGE", currentPage: currentPage})},
       setTotalUsersCount : (totalCount) =>{
        dispatch({type:"SET_TOTAL_USERS_COUNT", totalCount: totalCount})
       }      
    }
}


export default connect(f1,f2)(Users)