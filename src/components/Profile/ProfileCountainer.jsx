import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/Post-reducer';
import Profile from './Profile'
import { Redirect, withRouter } from 'react-router-dom';



class ProfileCountainer extends React.Component {
    componentDidMount(){
        let userId =this.props.match.params.userId;
        if(!userId){ userId = 2;}
        this.props.getUserProfile(userId);
       
    }
   render(){
    if(!this.props.isAuth)return <Redirect to={"/login"} />
    return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let f2 = (state) => ({profile: state.allPosts.profile, isAuth: state.auth.isAuth})
let WithUrlDataContainerComponrnt = withRouter(ProfileCountainer);


export default  connect(f2, {getUserProfile}) (WithUrlDataContainerComponrnt);
