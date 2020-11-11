import  a from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = (props) => {
 
let postsElements = props.PostData.map(e=><Post  message={e.message} like={e.likesCount}/>)
    return <div className={a.postsBlock}>
    <h3>My posts</h3>
    <div> 
      <div> <textarea></textarea></div>
    
    <div></div><button>Add post</button></div>
    
    <div className={a.posts}>
     {postsElements}
    </div>
  </div>
      
}  

export default  MyPost;
