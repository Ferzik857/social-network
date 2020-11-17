import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import status, { subscribe } from './redux/state';
import ReactDOM from "react-dom";
import {addPost,updateNewPostText} from './redux/state';

 

let rerenderEntireTree = (status)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App PostData={status.PostData} dialogsData={status.dialogsData} messagesData={status.messagesData} addPost={addPost} newPostText={status.newPostText} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }


 rerenderEntireTree(status)
 subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
