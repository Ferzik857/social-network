import MyPost from './MyPost/MyPost'
import  a from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
   
    return <div>
   <ProfileInfo />
  <MyPost PostData = {props.PostData}  newPostText={props.newPostText} dispatch={props.dispatch}/>
      </div>
}

export default  Profile;
