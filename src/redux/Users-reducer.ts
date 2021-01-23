import { AppStateType } from './redux-store';
import { UsersType } from './../types/types';
import{ userAPI } from "../api/api"
import { updateObjectInArray } from "../utils/validators/obiect-helpers";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

 
const FOLLOW = "FOLLOW"
const SET_USERS = "SET_USERS"
const UNFOLLOW = "UNFOLLOW"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState =  {
  users:[] as Array<UsersType>,
  pageSize: 5,
  totalUsersCount:0,
  currentPage:1,
  isFetching: true,
  followingInProgress: [] as Array<number>
};

type InitialState = typeof initialState


const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {


  if (action.type == SET_USERS){
    return {...state, users: action.users}
  } 

  if (action.type == UNFOLLOW){
    return {...state, users: updateObjectInArray(state.users, action.userId, "id",{followed:false})
    }
  } 
  if (action.type == FOLLOW){
    return {...state, users: updateObjectInArray(state.users, action.userId, "id",{followed:true})
}
}
 
if (action.type == SET_TOTAL_USERS_COUNT){
  return {...state, totalUsersCount: action.totalCount}
} 

if (action.type == SET_CURRENT_PAGE){
  return {...state, currentPage: action.currentPage}
} 
if (action.type == TOGGLE_IS_FETCHING){
  return {...state, isFetching: action.isFetching}
} 
if (action.type == TOGGLE_IS_FOLLOWING_PROGRESS){
  return {...state, followingInProgress: action.isFetching 
  ? [...state.followingInProgress, action.userId]
 :[...state.followingInProgress.filter(id => id != action.userId)] }
} 
return state
      
    }

   
type ActionsTypes =  setUsersType | unfollowSuccessType | followSuccessType |
setTotalUsersType | setCurrentPageType| toggleIsFetchingType | toggleFollowingInProgressType

type followSuccessType = {
  type: typeof FOLLOW
  userId:number
}
type unfollowSuccessType = {
  type: typeof UNFOLLOW
  userId:number
}
type setUsersType = {
  type: typeof SET_USERS
  users: Array<UsersType>
}
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
type setTotalUsersType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalCount: number
}
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING 
  isFetching:boolean
}
type toggleFollowingInProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching:boolean
  userId:number
}
    
export const followSuccess =(userId: number):followSuccessType => ({type:FOLLOW, userId: userId})     
export const unfollowSuccess = (userId: number):unfollowSuccessType => ({type:UNFOLLOW, userId: userId})
export const setUsers =(users: Array<UsersType>):setUsersType => ({type:SET_USERS, users: users})    
export const setCurrentPage =(currentPage: number):setCurrentPageType =>({type:SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalCount: number):setTotalUsersType =>({type:SET_TOTAL_USERS_COUNT, totalCount: totalCount})
export const toggleIsFetching = (isFetching:boolean):toggleIsFetchingType=>({type:TOGGLE_IS_FETCHING, isFetching:isFetching})
export const toggleFollowingInProgress = (isFetching:boolean, userId: number):toggleFollowingInProgressType=>({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching:isFetching,userId:userId})
  
 






export const getUsersThunkCreator = (Page: number,pageSize: number) =>{ 
  return async(dispatch: Dispatch<ActionsTypes>, getState: ()=> AppStateType)=>{
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(Page));
  let data = await userAPI.getUsers(Page,pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
}}
type ThunkType = ThunkAction<Promise<void>, AppStateType,unknown,ActionsTypes>
export const follow = (userId: number): ThunkType =>{ 
  return async (dispatch )=>{
    dispatch(toggleFollowingInProgress(true, userId));
   let response = await userAPI.follow(userId);
            if (response.data.resultCode === 0) {dispatch(followSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId));
}}

export const unfollow = (userId: number):ThunkType =>{ 
  return async (dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await userAPI.unfollow(userId)
            if (response.data.resultCode === 0) {dispatch(unfollowSuccess(userId))}
            dispatch(toggleFollowingInProgress(false, userId));  
}}






    export default usersReducer;









