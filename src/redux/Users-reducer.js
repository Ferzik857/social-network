import{ userAPI } from "../api/api"
import { updateObjectInArray } from "../utils/validators/obiect-helpers";


let initialState =  {
  users:[],
  pageSize: 5,
  totalUsersCount:0,
  currentPage:1,
  isFetching: true,
  followingInProgress: []
};


const usersReducer = (state = initialState, action)=>{


  if (action.type == "SET_USERS"){
    return {...state, users: action.users}
  } 

  if (action.type == "UNFOLLOW"){
    return {...state, users: updateObjectInArray(state.users, action.userId, "id",{followed:false})
    }
  } 
  if (action.type == "FOLLOW"){
    return {...state, users: updateObjectInArray(state.users, action.userId, "id",{followed:true})
}
}
 
if (action.type == "SET_TOTAL_USERS_COUNT"){
  return {...state, totalUsersCount: action.totalCount}
} 

if (action.type == "SET_CURRENT_PAGE"){
  return {...state, currentPage: action.currentPage}
} 
if (action.type == "TOGGLE_IS_FETCHING"){
  return {...state, isFetching: action.isFetching}
} 
if (action.type == "TOGGLE_IS_FOLLOWING_PROGRESS"){
  return {...state, followingInProgress: action.isFetching 
  ? [...state.followingInProgress, action.userId]
 :[...state.followingInProgress.filter(id => id != action.userId)] }
} 
return state
      
    }





    
export const followSuccess =(userId)=> ({type:"FOLLOW", userId: userId})     
export const unfollowSuccess = (userId)=> ({type:"UNFOLLOW", userId: userId})
export const setUsers =(users)=> ({type:"SET_USERS", users: users})    
export const setCurrentPage =(currentPage)=>({type:"SET_CURRENT_PAGE", currentPage: currentPage})
export const setTotalUsersCount = (totalCount) =>({type:"SET_TOTAL_USERS_COUNT", totalCount: totalCount})
export const toggleIsFetching = (isFetching)=>({type:"TOGGLE_IS_FETCHING", isFetching:isFetching})
export const toggleFollowingInProgress = (isFetching, userId)=>({type:"TOGGLE_IS_FOLLOWING_PROGRESS", isFetching:isFetching,userId:userId})
  
 






export const getUsersThunkCreator = (Page,pageSize) =>{ 
  return async(dispatch)=>{
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(Page));
  let data = await userAPI.getUsers(Page,pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
}}

export const follow = (userId) =>{ 
  return async (dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId));
   let response = await userAPI.follow(userId);
            if (response.data.resultCode === 0) {dispatch(followSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId));
}}

export const unfollow = (userId) =>{ 
  return async (dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await userAPI.unfollow(userId)
            if (response.data.resultCode === 0) {dispatch(unfollowSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId));  
}}






    export default usersReducer;









