import React from 'react';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/Post-reducer';
import Profile from './Profile'
import { Redirect, withRouter } from 'react-router-dom';

import { compose } from 'redux';



class ProfileCountainer extends React.Component {
    componentDidMount(){
        let userId =this.props.match.params.userId;
        if(!userId){ userId = 2;}
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
       
    }
   render(){
   
    return <Profile {...this.props} profile={this.props.profile} status= {this.props.status} updateStatus={this.props.updateStatus}/>
   
}
}

let f2 = (state) => ({
    profile: state.allPosts.profile,
    status: state.allPosts.status
})



export default  compose(
    connect(f2, {getUserProfile, getStatus, updateStatus}),
    withRouter,
     
)(ProfileCountainer);
