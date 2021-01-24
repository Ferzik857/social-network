import { connect } from "react-redux";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { follow, getUsersThunkCreator, unfollow, actions } from "../../redux/Users-reducer";
import { compose } from "redux";
import {getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/user-selectors";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = { 
    currentPage: number  
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType> 
    followingInProgress: Array<number>
}
type OwnPropsType = {  
    pageTitle: string  
}
type MapDispatchStatePropsType = {  
   
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void  
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    setCurrentPage:(currentPage: number)=> void

}
type PropsType = MapStatePropsType & MapDispatchStatePropsType & OwnPropsType


class UsersApi extends React.Component<PropsType> {

    componentDidMount(){
       
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  
  
  
  onPageChanged = (pageNumber: number)=>{
    this.props.getUsers(pageNumber, this.props.pageSize);

  }
  
  
     render(){
         <h2>{this.props.pageTitle}</h2>
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
  




let f1 = (state: AppStateType): MapStatePropsType =>{
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
    connect<MapStatePropsType, MapDispatchStatePropsType, OwnPropsType, AppStateType>(f1,{follow, unfollow, getUsers: getUsersThunkCreator})
    )(UsersApi)
