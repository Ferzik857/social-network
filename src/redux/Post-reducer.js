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
  newPostText:"",
profile: null,
status:""
};


const postReducer = (state = initialState, action)=>{

    if(action.type === 'ADD-POST'){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount:0
        };
        let stateCopy = {...state};
        stateCopy.PostData = [...state.PostData];
        stateCopy.PostData.push(newPost);
        stateCopy.newPostText = "";
        return stateCopy;
       
      }
      if (action.type === 'UPDATE-NEW-POST-TEXT'){
         let steteCopy = {...state};
        steteCopy.newPostText = action.newText;
        return steteCopy;
      }
      if (action.type === 'SET_USER_PROFILE'){
       
       return {...state, profile: action.profile};
     }
     if (action.type === SET_STATUS){
       
      return {...state, satus: action.satus};
    }
      return state;
    }

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile})
export const setStatus = (status)=>({type: SET_STATUS, status})
export const getUserProfile = (userId)=>(dispatch) =>{
  userAPI.getProfile(userId)
        .then(response =>{ 
          dispatch(setUserProfile(response.data));      
        });
}
export const getStatus= (userId)=>(dispatch) =>{
  profileAPI.getStatus(userId)
        .then(response =>{ 
          dispatch(setStatus(response.data));      
        });
}
export const updateStatus= (status)=>(dispatch) =>{
  profileAPI.updateStatus(status)
        .then(response =>{ 
          if(response.data.resultCode === 0){
            dispatch(setStatus(status)); 
          }
              
        });
}



    export default postReducer;








