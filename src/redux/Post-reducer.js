const SET_USER_PROFILE = 'SET_USER_PROFILE'



let initialState =  {
    PostData:[
    { id:1, message:"hi, how are you ?",likesCount: 12}, 
    { id:2, message:" Ok",likesCount: 17},  
    { id:3, message:"hi",likesCount: 12},  
    { id:4, message:"hi",likesCount: 12},    
  ], 
  newPostText:"",
profile: null
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
      return state;
    }

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile})


    export default postReducer;








