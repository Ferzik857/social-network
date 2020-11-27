import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';



let rerenderEntireTree = ()=>{
debugger;
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }


    rerenderEntireTree();

 store.subscribe(()=> {  
   rerenderEntireTree();
 });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//PostData={a.allPosts.PostData} 
//dialogsData={a.allMessages.dialogsData}
//messagesData={a.allMessages.messagesData}
//dispatch={store.dispatch.bind(store)} 
//newPostText={a.allPosts.newPostText} 
//newMessageBody={a.allMessages.newMessageBody}>