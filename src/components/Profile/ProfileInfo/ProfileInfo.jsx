
import Preloader from '../../common/Preloader/Preloader';
import a from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/User.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import {useState} from 'react';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {
  let [editMode, setEditmode] = useState(false);

  if (!props.profile) {//если нет профайла то отрисуй без него перезагрузку
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        props.savePhoto(e.target.files[0]);
      }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
   ()=> { setEditmode(false)})
  }
  
  return   (  
  <div>
      <div className = {a.descriptionBlock}>
          <img src={props.profile.photos.large || userPhoto} className ={a.mainPhoto} />
          {/*если фото пришло с сервака то покажи его или покажи нашу заглушку user.png*/}
          {props.isOwner && <input type = {'file'} onChange={onMainPhotoSelected} />}

          {editMode 
            ? <ProfileDataFormReduxForm initialValues = {props.profile} profile = {props.profile} onSubmit = {onSubmit}/> 
            : <ProfileData goToEditMode ={() => { setEditmode(true)}} profile = {props.profile} isOwner = {props.isOwner}/> }
          
          <ProfileStatusWithHooks status = {props.status} updateStatus ={props.updateStatus} />
      </div>
</div> 
  );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={a.contact}><b>{contactTitle}</b> : {contactValue}</div>
}

const ProfileData = (props) => {
  return <div>
            { props.isOwner && <div><button onClick = {props.goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b> : {props.profile.fullName}
            </div>
             <div>
                <b>Looking for a job</b> : {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>
            }
          <div>
              <b>About me</b> : {props.profile.aboutMe}
          </div>
          <div>
              <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
              return <Contact key={key} contactTitle = {key} contactValue = {props.profile.contacts[key] }/>
              })}
          </div>
  </div>

}




export default ProfileInfo;
