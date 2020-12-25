
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


let f1 =(store)=>{
 return {
  messagesData:store.allMessages.messagesData,
  dialogsData:store.allMessages.dialogsData,
  newMessageBody:store.allMessages.newMessageBody,
  
}
}
let f2 =(dispatch)=>{
return {
  onNewMessageChange: (body)=>{ dispatch({type:'UPDATE-NEW-MESSAGE-BODY', body:body})},
  onSendMessageClick: ()=>{ dispatch({type:'SEND-MESSAGE'})}
}
}



export default  compose(
  connect(f1,f2),
  withAuthRedirect
  )(Dialogs);
