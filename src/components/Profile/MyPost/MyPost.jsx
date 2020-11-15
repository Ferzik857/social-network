import  a from './MyPost.module.css'
import Post from './Post/Post'
import React, { createRef } from 'react';



const MyPost = (props) => {
 
 let v = React.createRef();

  let addPost = ()=>{
    let text = v.current.value;
    props.addPost(text);
   

  }



let postsElements = props.PostData.map(e=><Post  message={e.message} like={e.likesCount}/>)
    return <div className={a.postsBlock}>
    <h3>My posts</h3>
    <div> 
      <div> <textarea ref={v}></textarea></div>
      
    <div></div><button onClick={addPost}>Add post</button></div>
    
    <div className={a.posts}>
     {postsElements}
    </div>
  </div>
      
}  

export default  MyPost;
