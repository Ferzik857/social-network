import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {addPost, updateNewPostText} from './redux/state'


export let rerenderEntireTree = (status)=>{
ReactDOM.render(
  <React.StrictMode>
    <App PostData={status.PostData} dialogsData={status.dialogsData} messagesData={status.messagesData} addPost={addPost} newPostText={status.newPostText} updateNewPostText={updateNewPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
