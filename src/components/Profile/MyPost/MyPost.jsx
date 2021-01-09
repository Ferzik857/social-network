import  a from './MyPost.module.css';
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from "redux-form";



const MyPost = (props) => {

  let v = React.createRef();

 
  let addPost = (values) => {props.addPost(values.newPostText)};
  

let postsElements = props.PostData.map(e=><Post message={e.message} like={e.likesCount}/>)
    return <div className={a.postsBlock}>
    <h3>My posts</h3>
    <AddNewPostFormRedux onSubmit={addPost}/> 
    <div className={a.posts}>
     {postsElements}
    </div>
  </div>
      
} 

const AddNewPostForm = (props)=>{
  return (
    <form onSubmit={props.handleSubmit}> 
      <div> <Field component="textarea" name="newPostText" /> </div>    
    <div><button>Add post</button></div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);


export default  MyPost;
