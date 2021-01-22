import { PostDataType, profileType, ContactsType, PhotosType } from './../types/types';
import { profileAPI, userAPI } from "../api/api";
import { stopSubmit} from "redux-form"


const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"




let initialState =  {
    PostData:[
    { id:1, message:"hi, how are you ?",likesCount: 12}, 
    { id:2, message:" Ok",likesCount: 17},  
    { id:3, message:"hi",likesCount: 12},  
    { id:4, message:"hi",likesCount: 12},    
  ] as Array<PostDataType>, 
profile: null as profileType | null,
status:"",
newPostText: ""
};

export type InitialStateType = typeof initialState
const postReducer = (state = initialState, action: any):InitialStateType=>{

    if(action.type === 'ADD-POST'){
        let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount:0
        };
        let stateCopy = {...state};
        stateCopy.PostData = [...state.PostData];
        stateCopy.PostData.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
       
      }
      if (action.type === SET_USER_PROFILE){
       
       return {...state, profile: action.profile};
     }
     if (action.type === SET_STATUS){
       
      return {...state, status: action.status};
    }
    if (action.type === SAVE_PHOTO_SUCCESS){
       
      return {...state, profile: {...state.profile, photos: action.photos} as profileType };
    }
      return state;
    }




export const setUserProfile = (profile: profileType):setUserProfileType =>({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string):setStatusType =>({type: SET_STATUS, status})
export const savePhotoSuccess=(photos: PhotosType):savePhotoSuccessType =>({type: SAVE_PHOTO_SUCCESS,photos})

type setUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: profileType
}
type setStatusType = {
  type: typeof SET_STATUS
  status: string
}
type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}


export const getUserProfile = (userId: number)=> async (dispatch: any) =>{
 let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));            
}
export const getStatus= (userId: number)=> async (dispatch: any) =>{
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));          
}
export const updateStatus= (status: string)=> async (dispatch: any) =>{
  let response = await profileAPI.updateStatus(status)
if(response.data.resultCode === 0){
dispatch(setStatus(status)); 
}
}
export const savePhoto = (file: any)=> async (dispatch: any) =>{
  let response = await profileAPI.savePhoto(file)
if(response.data.resultCode === 0){
dispatch(savePhotoSuccess(response.data.data.photos)); 
}
}
export const saveProfile = (profile: profileType)=> async (dispatch: any, getState: any) =>{
const userId = getState().auth.userId;
let response = await profileAPI.saveProfile(profile)
if(response.data.resultCode === 0){
 dispatch(getUserProfile(userId));
} else {
dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
return Promise.reject(response.data.messages[0])
}
}


    export default postReducer;








