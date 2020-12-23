import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import  b from './Dialogs.module.css'
import Message from './Message/Message';








const Dialogs = (props) => {
  
  
   let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)

     let messageElements = props.messagesData.map( m => <Message message={m.message} />)
    

     let newMessageBody = props.newMessageBody;
     let onSendMessageClick=()=>{
      props.onSendMessageClick()
     }
     let onNewMessageChange=(e)=>{
     let body = e.target.value;
     props.onNewMessageChange(body)
     }

if(!props.isAuth)return <Redirect to={"/login"} />


   return <div className={b.dialog}>
      
         <div className={b.dialogsItems}>
           {dialogsElements}
         </div>
      
         <div className={b.messages}>
          <div>{messageElements}</div>
          <div>
            <div><textarea value={newMessageBody}
            onChange={onNewMessageChange} 
            placeholder="message"></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
         </div>

   </div>
}

export default  Dialogs;
