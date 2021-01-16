import  a from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const MyPost = React.memo(props => {

  let v = React.createRef();

 
  let addPost = (values) => {props.addPost(values.newPostText)};
  

let postsElements = props.PostData.map(e=><Post key={e.id} message={e.message} like={e.likesCount}/>)
    return <div className={a.postsBlock}>
    <h3>My posts</h3>
    <AddNewPostFormRedux onSubmit={addPost}/> 
    <div className={a.posts}>
     {postsElements}
    </div>
  </div>
      
} 
)
const maxLength10 = maxLengthCreator(10)


const AddNewPostForm = (props)=>{
  return (
    <form onSubmit={props.handleSubmit}> 
      <div> <Field component={Textarea} name="newPostText" validate={[required,maxLength10]}  placeholder={"Post message"}/> </div>    
    <div><button>Add post</button></div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);


export default  MyPost;
