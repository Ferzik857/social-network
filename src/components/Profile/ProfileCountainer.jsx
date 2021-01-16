import React from 'react';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus, savePhoto, saveProfile } from '../../redux/Post-reducer';
import Profile from './Profile'
import { Redirect, withRouter } from 'react-router-dom';

import { compose } from 'redux';



class ProfileCountainer extends React.Component {
    refreshProfile(){
        let userId =this.props.match.params.userId;
        if(!userId){ 
            userId = this.props.authorizeuserId;
            if(!userId){this.props.history.push("/login")}
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)  
    }
    componentDidMount(){
       this.refreshProfile();   
    }
    componentDidUpdate(prevProps,prevState, snapshot){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()}
    }

   render(){
   
    return <Profile {...this.props} 
    profile={this.props.profile} 
    status= {this.props.status}
    updateStatus={this.props.updateStatus}
    isOwner={!this.props.match.params.userId}
    savePhoto={this.props.savePhoto}/>
   
}
}

let f2 = (state) => ({
    profile: state.allPosts.profile,
    status: state.allPosts.status,
    authorizeuserId: state.auth.userId,
    isAuth: state.auth.isAuth
})



export default  compose(
    connect(f2, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
     
)(ProfileCountainer);
