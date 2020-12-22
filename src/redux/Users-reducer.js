import{ userAPI } from "../api/api"


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
    return {...state, users: state.users.map(u =>{
      if (u.id === action.userId){return {...u, followed: false}}
      return u;
    })
    }
  } 
  if (action.type == "FOLLOW"){
  return {...state, users: state.users.map(u =>{
  if (u.id === action.userId){return {...u, followed: true}}
  return u;
})
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
  
 






export const getUsersThunkCreator = (currentPage,pageSize) =>{ 
  return (dispatch)=>{
  dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage,pageSize).then(data =>{ 
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setTotalUsersCount(data.totalCount));
          });
}}

export const follow = (userId) =>{ 
  return (dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId));
            userAPI.follow(userId)
            .then(response =>{ 
            if (response.data.resultCode === 0) {dispatch(followSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId));
            });
}}

export const unfollow = (userId) =>{ 
  return (dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId));
            userAPI.unfollow(userId)
            .then(response =>{ 
            if (response.data.resultCode === 0) {dispatch(unfollowSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId));
            });
}}






    export default usersReducer;









