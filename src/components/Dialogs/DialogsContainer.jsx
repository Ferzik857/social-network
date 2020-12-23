
import { connect } from 'react-redux';
import Dialogs from './Dialogs';


let f1 =(store)=>{
 return {
  messagesData:store.allMessages.messagesData,
  dialogsData:store.allMessages.dialogsData,
  newMessageBody:store.allMessages.newMessageBody,
  isAuth: store.auth.isAuth
}
}
let f2 =(dispatch)=>{
return {
  onNewMessageChange: (body)=>{ dispatch({type:'UPDATE-NEW-MESSAGE-BODY', body:body})},
  onSendMessageClick: ()=>{ dispatch({type:'SEND-MESSAGE'})}
}
}

const DialogsContainer = connect(f1,f2)(Dialogs);

export default  DialogsContainer;
