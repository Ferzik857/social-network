import MyPost from './MyPost/MyPost'
import MyPostContainer from './MyPost/MyPostContainer'
import  a from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
   
    return <div>
   <ProfileInfo />
  <MyPostContainer PostData = {props.PostData}  newPostText={props.newPostText} dispatch={props.dispatch}/>
      </div>
}

export default  Profile;
