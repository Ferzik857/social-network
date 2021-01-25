import { AppStateType, InferActionsTypes } from './redux-store';
import { UsersType } from './../types/types';
import{ userAPI } from "../api/api"
import { updateObjectInArray } from "../utils/validators/obiect-helpers";

import { ThunkAction } from 'redux-thunk';

 


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


  if (action.type == 'SET_USERS'){
    return {...state, users: action.users}
  } 

  if (action.type == 'UNFOLLOW'){
    return {...state, users: updateObjectInArray(state.users, action.userId, "id",{followed:false})
    }
  } 
  if (action.type == 'FOLLOW'){
    return {...state, users: updateObjectInArray(state.users, action.userId, "id",{followed:true})
}
}
 
if (action.type == 'SET_TOTAL_USERS_COUNT'){
  return {...state, totalUsersCount: action.totalCount}
} 

if (action.type == 'SET_CURRENT_PAGE'){
  return {...state, currentPage: action.currentPage}
} 
if (action.type == 'TOGGLE_IS_FETCHING'){
  return {...state, isFetching: action.isFetching}
} 
if (action.type == 'TOGGLE_IS_FOLLOWING_PROGRESS'){
  return {...state, followingInProgress: action.isFetching 
  ? [...state.followingInProgress, action.userId]
 :[...state.followingInProgress.filter(id => id != action.userId)] }
} 
return state
      
    }

   
type ActionsTypes =  InferActionsTypes<typeof actions>

export const actions = {
 followSuccess : (userId: number) => ({type:'FOLLOW', userId: userId} as const),     
 unfollowSuccess : (userId: number) => ({type:'UNFOLLOW', userId: userId} as const),
 setUsers : (users: Array<UsersType>) => ({type:'SET_USERS', users: users} as const),    
 setCurrentPage : (currentPage: number) =>({type:'SET_CURRENT_PAGE', currentPage: currentPage} as const),
 setTotalUsersCount : (totalCount: number) =>({type:'SET_TOTAL_USERS_COUNT', totalCount: totalCount} as const),
 toggleIsFetching : (isFetching: boolean) =>({type:'TOGGLE_IS_FETCHING', isFetching:isFetching}as const ),
 toggleFollowingInProgress : (isFetching: boolean, userId: number) =>({type:'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching:isFetching,userId:userId} as const )
  }
 






export const getUsersThunkCreator = (Page: number,pageSize: number):ThunkType  =>{ 
  return async(dispatch, getState)=>{
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPage(Page));
  let data = await userAPI.getUsers(Page,pageSize);
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setTotalUsersCount(data.totalCount));
}}
type ThunkType = ThunkAction<Promise<void>, AppStateType,unknown,ActionsTypes>
export const follow = (userId: number): ThunkType =>{ 
  return async (dispatch )=>{
    dispatch(actions.toggleFollowingInProgress(true, userId));
   let response = await userAPI.follow(userId);
            if (response.data.resultCode === 0) {dispatch(actions.followSuccess(userId))}
            dispatch(actions.toggleFollowingInProgress(false, userId));
}}

export const unfollow = (userId: number):ThunkType =>{ 
  return async (dispatch)=>{
    dispatch(actions.toggleFollowingInProgress(true, userId));
    let response = await userAPI.unfollow(userId)
            if (response.data.resultCode === 0) {dispatch(actions.unfollowSuccess(userId))}
            dispatch(actions.toggleFollowingInProgress(false, userId));  
}}






    export default usersReducer;









