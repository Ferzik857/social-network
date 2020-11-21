
let initialState =  {
    dialogsData:[
        { id:1, name:"Dima"}, 
        { id:2, name:"Sasha"}, 
        { id:3, name:"Masha"}, 
        { id:4, name:"Yra"}  
      ],
    messagesData:[
        { id:1, message:"hi"}, 
        { id:2, message:"hi"},  
        { id:3, message:"hi"},  
        { id:4, message:"hi"},    
      ], 
      newMessageBody:""};



const messageReducer = (state = initialState, action)=>{

     if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
        state.newMessageBody = action.body;
       
      }else if (action.type === 'SEND-MESSAGE'){
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({id: 6, message: body});
        
      }
    
      return state;
    }

    export default messageReducer;