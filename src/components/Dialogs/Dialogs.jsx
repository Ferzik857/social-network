
import DialogItem from './DialogItem/DialogItem';
import  b from './Dialogs.module.css'
import Message from './Message/Message';








const Dialogs = (props) => {

   let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} />)

     let messageElements = props.messagesData.map( m => <Message message={m.message} />)
     
   return <div className={b.dialog}>
      
         <div className={b.dialogsItems}>
           {dialogsElements}
         </div>
      
         <div className={b.messages}>
           {messageElements}
         </div>

   </div>
}

export default  Dialogs;
