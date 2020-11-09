import  a from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
    return <div>
    My posts
    <div>New post</div>
    <div className={a.posts}>
     <Post  message="hi, how are you ?" />
     <Post message= " Ok" />
    </div>
  </div>
      
}  

export default  MyPost;
