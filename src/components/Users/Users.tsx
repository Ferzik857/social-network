import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUser, getUsersFilter } from '../../redux/user-selectors';
import { FilterType, getUsersThunkCreator } from '../../redux/Users-reducer';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from './UsersSearchForm';
import * as queryString from "querystring"




type PropsType={

}

 export const Users: React.FC<PropsType> = (props) => {
  const users = useSelector(getUser)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch();
  const history = useHistory();
  

 
  useEffect(()=> {
    const parsed = queryString.parse(history.location.search.substr(1)) as {term:string, page:string, friend:string}

    let actualPage = currentPage
    let actualFilter = filter

   

    if(!!parsed.page)actualPage = Number(parsed.page) 
    if(!!parsed.term)actualFilter = {...actualFilter,term:parsed.term as string}
    if(!!parsed.friend)actualFilter = {...actualFilter, friend:parsed.friend ==="null"? null: parsed.friend ==="true"? true :false}

    dispatch(getUsersThunkCreator(actualPage,pageSize,actualFilter))
  }, [])
  useEffect(()=>{
    const query:any = {}
    if(!!filter.term)query.term = filter.term
    if(filter.friend!== null)query.friend = String(filter.friend)
    if(currentPage !== 1)query.page = String(currentPage)
    history.push({
      pathname:`/users`,
      search: queryString.stringify(query) as any
    })
  },[filter,currentPage])
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














