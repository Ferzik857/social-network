import { connect } from "react-redux";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";
import { follow, getUsersThunkCreator, setCurrentPage, toggleFollowingInProgress, unfollow } from "../../redux/Users-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";





class UsersApi extends React.Component {

    componentDidMount(){
       
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data =>{ 
            this.props.toggleIsFetching(false);
              this.props.setUsers(data.items);
              this.props.setTotalUsersCount(data.totalCount);
          }); */
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
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
    isFetching:state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress
}
}
/*let f2 = (dispatch)=>{
    return{
        follow: (userId)=> ({type:"FOLLOW", userId: userId}),
        unfollow: (userId)=> ({type:"UNFOLLOW", userId: userId}),
        setUsers: setUsers,
        setCurrentPage:(currentPage)=>({type:"SET_CURRENT_PAGE", currentPage: currentPage}),
       setTotalUsersCount : setTotalUsersCount, 
       toggleIsFetching: toggleIsFetching, 
       toggleFollowingInProgress: (isFetching, userId)=>({type:"TOGGLE_IS_FOLLOWING_PROGRESS", isFetching:isFetching,userId:userId}),  
    getUsersThunkCreator: getUsersThunkCreator
    }
}*/



let withRedirect = withAuthRedirect(UsersApi);

export default connect(f1,{follow, getUsers: getUsersThunkCreator, setCurrentPage,  toggleFollowingInProgress, unfollow })(withRedirect)
