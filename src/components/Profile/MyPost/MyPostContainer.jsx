import { connect } from 'react-redux';
import MyPost from './MyPost';



let f1 =(store)=>{
  return {
    PostData:store.allPosts.PostData,
    newPostText:store.allPosts.newPostText
  }
 }
 let f2 =(dispatch)=>{
 return {
   
  addPost: (newPostText)=>{ dispatch({type:'ADD-POST', newPostText})}
 }
 }

 const MyPostContainer = connect(f1,f2)(MyPost);






export default  MyPostContainer;
