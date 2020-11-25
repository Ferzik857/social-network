
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

  let onSendMessageClick=()=>{
    props.dispatch({type:'SEND-MESSAGE'})
   }
   let onNewMessageChange=(body)=>{
   
   props.dispatch({type:'UPDATE-NEW-MESSAGE-BODY', body:body})
   }


   
   return <Dialogs messagesData={props.messagesData}
   dialogsData={props.dialogsData}  
   newMessageBody={props.newMessageBody}
   onNewMessageChange={onNewMessageChange}
   onSendMessageClick={onSendMessageClick}
    />
}

export default  DialogsContainer;
