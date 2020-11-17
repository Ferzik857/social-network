let rerenderEntireTree =()=>{}
let status = {
     PostData:[
    { id:1, message:"hi, how are you ?",likesCount: 12}, 
    { id:2, message:" Ok",likesCount: 17},  
    { id:3, message:"hi",likesCount: 12},  
    { id:4, message:"hi",likesCount: 12},    
  ],
  messagesData:[
    { id:1, message:"hi"}, 
    { id:2, message:"hi"},  
    { id:3, message:"hi"},  
    { id:4, message:"hi"},    
  ],
   dialogsData:[
    { id:1, name:"Dima"}, 
    { id:2, name:"Sasha"}, 
    { id:3, name:"Masha"}, 
    { id:4, name:"Yra"}  
  ],
  newPostText:""};

 export const addPost = () =>{
      let newPost = {
          id: 5,
          message: status.newPostText,
          likesCount:0
      }
      status.PostData.push(newPost);
      status.newPostText = "";
      rerenderEntireTree(status);
    }
  export const updateNewPostText = (newText) =>{
    status.newPostText = newText;
    rerenderEntireTree(status);
}
export const subscribe = (observer)=>{
  rerenderEntireTree = observer;
} 
  export default status; 