import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUser, getUsersFilter } from '../../redux/user-selectors';
import { FilterType, getUsersThunkCreator } from '../../redux/Users-reducer';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from './UsersSearchForm';




type PropsType={
  
}

 export const Users: React.FC<PropsType> = (props) => {
  const users = useSelector(getUser)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()
 
  useEffect(()=> {
    dispatch(getUsersThunkCreator(currentPage,pageSize,filter))
  }, [])
  const onFilterChanged = (filter:FilterType)=> {
   dispatch(getUsersThunkCreator(1, pageSize, filter));
  }
  const onPageChanged = (pageNumber:number)=>{
   dispatch(getUsersThunkCreator(pageNumber, pageSize, filter));
 }
 const unfollow = (userId: number) => {
   dispatch(unfollow(userId));
 }
 const follow = (userId: number) => {
  dispatch(follow(userId));
 }
    return <div>
    < UsersSearchForm onFilterChanged = {onFilterChanged}/> 
       <Paginator  currentPage={currentPage} onPageChanged={onPageChanged}
       totalItemsCount={totalUsersCount} pageSize={pageSize}/><div>
       
 {users.map(u => < User  user={u} followingInProgress = {followingInProgress}
 key = {u.id}  unfollow = {unfollow} follow ={follow}/>)
 }
     </div>   
     </div>
}














