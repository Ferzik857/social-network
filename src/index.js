import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import store from './redux/redux-store';
import ReactDOM from "react-dom";


 

let rerenderEntireTree = (status)=>{

    ReactDOM.render(
      <React.StrictMode>
        <App PostData={status.allPosts.PostData} 
        dialogsData={status.allMessages.dialogsData}
        messagesData={status.allMessages.messagesData}
        dispatch={store.dispatch.bind(store)} 
        newPostText={status.allPosts.newPostText} 
        newMessageBody={status.allMessages.newMessageBody}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }


 rerenderEntireTree(store.getState());

 store.subscribe(()=> {
   let state = store.getState();
   rerenderEntireTree(state);
 });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
