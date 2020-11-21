import messageReducer from "./Message-reducer";
import postReducer from "./Post-reducer";

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
  this._state = messageReducer(this._state, action);
  this._state = postReducer(this._state, action);

  this._callSubscriber(this._state);
  
}
}




  export default store; 