import  a from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
    return <div className={a.postsBlock}>
    <h3>My posts</h3>
    <div> 
      <div> <textarea></textarea></div>
    
    <div></div><button>Add post</button></div>
    
    <div className={a.posts}>
     <Post  message="hi, how are you ?" />
     <Post message= " Ok" />
    </div>
  </div>
      
}  

export default  MyPost;
