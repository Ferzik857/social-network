import MyPost from './MyPost';



const MyPostContainer = (props) => {
  
  let addPost = ()=>props.dispatch({type:'ADD-POST'});
  let onPostChange = (text) => {
  props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
  }
 
    return <MyPost addPost={addPost} 
    onPostChange={onPostChange} 
    PostData={props.PostData}
    newPostText={props.newPostText}/>
      
}  

export default  MyPostContainer;
