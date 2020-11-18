import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import store from './redux/state';
import ReactDOM from "react-dom";


 

let rerenderEntireTree = (status)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App PostData={store._state.PostData} dialogsData={store._state.dialogsData} messagesData={store._state.messagesData} dispatch={store.dispatch.bind(store)} newPostText={store._state.newPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }


 rerenderEntireTree(store.getState())
 store.subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
