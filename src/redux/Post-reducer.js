import { profileAPI, userAPI } from "../api/api";



const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState =  {
    PostData:[
    { id:1, message:"hi, how are you ?",likesCount: 12}, 
    { id:2, message:" Ok",likesCount: 17},  
    { id:3, message:"hi",likesCount: 12},  
    { id:4, message:"hi",likesCount: 12},    
  ], 
profile: null,
status:""
};


const postReducer = (state = initialState, action)=>{

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
      return state;
    }

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile})
export const setStatus = (status)=>({type: SET_STATUS, status})
export const getUserProfile = (userId)=> async (dispatch) =>{
 let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));            
}
export const getStatus= (userId)=> async (dispatch) =>{
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));          
}
export const updateStatus= (status)=> async (dispatch) =>{
  let response = await profileAPI.updateStatus(status)
if(response.data.resultCode === 0){
dispatch(setStatus(status)); 
}
}



    export default postReducer;








