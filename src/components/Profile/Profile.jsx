import MyPost from './MyPost/MyPost'
import  a from './Profile.module.css'
const Profile = () => {
    return <div>
    <div className={a.content}><img src="https://animal-wallpaper.com/wallpaper/nature-landscape-background-hd-wallpaper-For-Background-HD-Wallpaper.jpg" />
  </div>
  <div>
    ava + description
  </div>
  <MyPost />
      </div>
}

export default  Profile;
