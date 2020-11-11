import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let PostData=[
  { id:1, message:"hi, how are you ?",likesCount: 12}, 
  { id:2, message:" Ok",likesCount: 17},  
  { id:3, message:"hi",likesCount: 12},  
  { id:4, message:"hi",likesCount: 12},    
]
let messagesData=[
  { id:1, message:"hi"}, 
  { id:2, message:"hi"},  
  { id:3, message:"hi"},  
  { id:4, message:"hi"},    
]
let dialogsData =[
  { id:1, name:"Dima"}, 
  { id:2, name:"Sasha"}, 
  { id:3, name:"Masha"}, 
  { id:4, name:"Yra"}  
];



ReactDOM.render(
  <React.StrictMode>
    <App PostData={PostData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
