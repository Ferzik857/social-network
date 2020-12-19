import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/Post-reducer';
import Profile from './Profile'
import * as axios from "axios"
import { withRouter } from 'react-router-dom';


class ProfileCountainer extends React.Component {
    componentDidMount(){
        let userId =this.props.match.params.userId;
        if(!userId){ userId = 2;}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response =>{ 
          
            this.props.setUserProfile(response.data);
            
        });
    }
   render(){
    return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let f2 = (state) => ({profile: state.allPosts.profile})
let WithUrlDataContainerComponrnt = withRouter(ProfileCountainer);


export default  connect(f2, {setUserProfile}) (WithUrlDataContainerComponrnt);
