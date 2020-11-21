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
        state.PostData.push(newPost);
        state.newPostText = "";
       
      }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        state.newPostText = action.newText;
        
      }
      return state;
    }
    export default postReducer;








