import { connect } from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";

class UsersApi extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response =>{ 
            this.props.toggleIsFetching(false);
              this.props.setUsers(response.data.items);
              this.props.setTotalUsersCount(response.data.totalCount);
          }); }
  
  
  
  onPageChanged = (pageNumber)=>{
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
          .then(response =>{ 
            this.props.toggleIsFetching(false);
              this.props.setUsers(response.data.items)
          });
  }
  
  
     render(){
 return <>
 {this.props.isFetching ? <Preloader/> : null}
 <Users onPageChanged = {this.onPageChanged}
 currentPage = {this.props.currentPage}
 unfollow = {this.props.unfollow}
 follow = {this.props.follow}
 totalUsersCount = {this.props.totalUsersCount} 
 pageSize = {this.props.pageSize}
 users = {this.props.users} />
 </>
     } 
     
  }
  












let f1 = (state)=>{
return{
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    isFetching:state.usersPage.isFetching
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
       }, 
       toggleIsFetching: (isFetching)=>{
           dispatch({type:"TOGGLE_IS_FETCHING", isFetching:isFetching})
       }     
    }
}


export default connect(f1,f2)(UsersApi)