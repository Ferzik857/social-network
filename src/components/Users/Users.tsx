import React from 'react';
import { UsersType } from '../../types/types';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUsersCount: number, 
    pageSize: number, 
    currentPage: number, 
    onPageChanged: (pageNumber: number)=> void 
    portionSize?: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = (props) => {
    return <div>
       <Paginator  currentPage={props.currentPage} onPageChanged={props.onPageChanged}
       totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
       
 {props.users.map(u => < User user={u} followingInProgress = {props.followingInProgress}
 key = {u.id}  unfollow = {props.unfollow} follow ={props.follow}/>)
 }
     </div>   
   } 



 export default Users;












