import { NavLink } from 'react-router-dom';
import  b from './../Dialogs.module.css'


const DialogItem = (props) =>{
   let path = "/Dialogs/" + props.id;
   return <div>
      <NavLink to={path} activeClassName={b.active}>{props.name}</NavLink></div>
}


export default  DialogItem;
