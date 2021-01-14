
import Preloader from '../../common/Preloader/Preloader';
import  a from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  
  return (
  <div>
<div className={a.descriptionBlock}>
  <img src={props.profile.photos.large}/>
  <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus}/>
</div>
</div>)
}



export default  ProfileInfo;
