import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import  b from './Dialogs.module.css'
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form"



const FormDialogs = (props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field component="textarea" name="newMessageBody" placeholder="Enter your massage" />
      </div>
    <div><button>Send</button></div>
    </form>
  )
  }
const FormDialogsRedux = reduxForm({form: "FormDialogsRedux"})(FormDialogs)


const Dialogs = (props) => {
  const addFormDialogs = (e) => {

    props.onSendMessageClick(e.newMessageBody)
    }
  
   let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

     let messageElements = props.messagesData.map( m => <Message message={m.message} key={m.id} />)
    

   
   

if(!props.isAuth)return <Redirect to={"/login"} />


   return <div className={b.dialog}>
      
         <div className={b.dialogsItems}>
           {dialogsElements}
         </div>
      
         <div className={b.messages}>
          <div>{messageElements}</div>
         
           <FormDialogsRedux onSubmit={addFormDialogs}/>
         
         </div>

   </div>
}







export default  Dialogs;
