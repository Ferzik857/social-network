import MyPost from './MyPost/MyPost'
import MyPostContainer from './MyPost/MyPostContainer'
import  a from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
   
    return <div>
   <ProfileInfo profile = {props.profile} status={props.status} updateStatus={props.updateStatus} />
  <MyPostContainer />
      </div>
}

export default  Profile;
