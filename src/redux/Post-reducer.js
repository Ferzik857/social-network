let initialState =  {
    PostData:[
    { id:1, message:"hi, how are you ?",likesCount: 12}, 
    { id:2, message:" Ok",likesCount: 17},  
    { id:3, message:"hi",likesCount: 12},  
    { id:4, message:"hi",likesCount: 12},    
  ], 
  newPostText:""};


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
       
      }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
         let steteCopy = {...state};
        steteCopy.newPostText = action.newText;
        return steteCopy;
        
      }
      return state;
    }
    export default postReducer;








