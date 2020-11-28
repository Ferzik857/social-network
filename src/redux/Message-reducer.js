
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
       let stateCopy = {...state}
       stateCopy.newMessageBody = action.body
        return stateCopy;
       
      }else if (action.type === 'SEND-MESSAGE'){
        let steteCopy = {...state}
        let body = steteCopy.newMessageBody;
        steteCopy.messagesData = [...state.messagesData]
        steteCopy.messagesData.push({id: 6, message: body});
        steteCopy.newMessageBody = "";
        return steteCopy;
        
      }
    
      return state;
    }

    export default messageReducer;