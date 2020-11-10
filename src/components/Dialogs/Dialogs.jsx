import { NavLink } from 'react-router-dom';
import  b from './Dialogs.module.css'


const DialogItem = (props) =>{
   let path = "/Dialogs/" + props.id;
   return <div className={b.dialog + " " + b.active}>
      <NavLink to={path}>{props.name}</NavLink></div>
}

const Message = (props) =>{
return  <div className={b.message}>{props.message}</div>
}



const Dialogs = (props) => {
   return <div className={b.dialog}>
      
         <div className={b.dialogsItems}>
            <DialogItem name="Dima" id="1" />
            <DialogItem name="Sasha" id="2" />
            <DialogItem name="Masha" id="3" />
            <DialogItem name="Yra" id="4" />
            <DialogItem name="Vaci" id="5" />
            <DialogItem name="Djno" id="6" />
            <DialogItem name="Qwer" id="7" />
         </div>
      
         <div className={b.messages}>
           <Message message="hi" />
           <Message message="hi" />
           <Message message="hi" />
           <Message message="hi" />
           <Message message="hi" />
           <Message message="hi" />
           <Message message="hi" />
         </div>

   </div>
}

export default  Dialogs;
