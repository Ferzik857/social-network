import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/Post-reducer';
import Profile from './Profile'
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class ProfileCountainer extends React.Component {
    componentDidMount(){
        let userId =this.props.match.params.userId;
        if(!userId){ userId = 2;}
        this.props.getUserProfile(userId);
       
    }
   render(){
    
    return <Profile {...this.props} profile={this.props.profile}/>
   }
}
let AuthRedirectComponent = withAuthRedirect(ProfileCountainer);


let f2 = (state) => ({profile: state.allPosts.profile})
let WithUrlDataContainerComponrnt = withRouter(AuthRedirectComponent);


export default  connect(f2, {getUserProfile}) (WithUrlDataContainerComponrnt);
