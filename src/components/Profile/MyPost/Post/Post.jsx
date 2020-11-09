import  a from './Post.module.css'

const Post = (props) => {
  
    return <div className={a.item}>{props.message}</div>
      
      
}

export default  Post;


