import { connect } from "react-redux";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { follow, getUsersThunkCreator, setCurrentPage, toggleFollowingInProgress, unfollow } from "../../redux/Users-reducer";
import { compose } from "redux";
import {getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/user-selectors";





class UsersApi extends React.Component {

    componentDidMount(){
       
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  
  
  
  onPageChanged = (pageNumber)=>{
    this.props.getUsers(pageNumber, this.props.pageSize);

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
 users = {this.props.users} 
 followingInProgress={this.props.followingInProgress}/>
 </>
     } 
     
  }
  




let f1 = (state)=>{
    return{
        users:getUser(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
    }


export default compose(
    connect(f1,{follow, getUsers: getUsersThunkCreator, setCurrentPage,  toggleFollowingInProgress, unfollow }),
    )(UsersApi)
