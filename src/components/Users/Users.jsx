import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";



const Users = (props) => {
    return <div>
       <Paginator  currentPage={props.currentPage} onPageChanged={props.onPageChanged}
       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
       
 {props.users.map(u => < User user={u} followingInProgress = {props.followingInProgress}
 key = {u.id}  unfollow = {props.unfollow} follow ={props.follow}/>)
 }
     </div>   
   } 



 export default Users;












