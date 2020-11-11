import  a from './Post.module.css'

const Post = (props) => {
  
    return <div>
         <div className={a.item}>{props.message}</div>
<span>Like: {props.like}</span>
         </div>
      
      
}

export default  Post;


