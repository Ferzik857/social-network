
import Preloader from '../../common/Preloader/Preloader';
import  a from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  return (
  <div>
  <div className={a.content}><img src="https://animal-wallpaper.com/wallpaper/nature-landscape-background-hd-wallpaper-For-Background-HD-Wallpaper.jpg" />
</div>
<div className={a.descriptionBlock}>
  <img src={props.profile.photos.large}/>
  ava + description
</div>
</div>)
}



export default  ProfileInfo;
