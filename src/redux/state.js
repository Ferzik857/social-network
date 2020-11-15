let status = {
     PostData:[
    { id:1, message:"hi, how are you ?",likesCount: 12}, 
    { id:2, message:" Ok",likesCount: 17},  
    { id:3, message:"hi",likesCount: 12},  
    { id:4, message:"hi",likesCount: 12},    
  ],
  messagesData:[
    { id:1, message:"hi"}, 
    { id:2, message:"hi"},  
    { id:3, message:"hi"},  
    { id:4, message:"hi"},    
  ],
   dialogsData:[
    { id:1, name:"Dima"}, 
    { id:2, name:"Sasha"}, 
    { id:3, name:"Masha"}, 
    { id:4, name:"Yra"}  
  ]};

 export let addPost = (postMessage) =>{
      let newPost = {
          id: 5,
          message: postMessage,
          likesCount:0
      }
      status.PostData.push(newPost);
  }

  export default status;