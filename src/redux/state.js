let store = {
  _state : {
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
 newPostText:"",
 newMessageBody:""
},
 getState(){
   return this._state;
 },
_callSubscriber(){},


subscribe(observer){
  this._callSubscriber = observer;
}, 
dispatch(action){
if(action.type === 'ADD-POST'){
    let newPost = {
        id: 5,
        message: this._state.newPostText,
        likesCount:0
    }
    this._state.PostData.push(newPost);
    this._state.newPostText = "";
    this._callSubscriber(this._state);
  }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
    this._state.newPostText = action.newText;
    this._callSubscriber(this._state);
  }else if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
    this._state.newMessageBody = action.body;
    this._callSubscriber(this._state);
  }else if (action.type === 'SEND-MESSAGE'){
    let body = this._state.newMessageBody;
    this._state.newMessageBody = "";
    this._state.messagesData.push({id: 6, message: body});
    this._callSubscriber(this._state);
  }
}
}




  export default store; 