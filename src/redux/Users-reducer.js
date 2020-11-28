let initialState =  {
    users:[
    { id:1, followed : true, fullName:"Dima",status: "i like this", location:{city:"Minsk", country:"Belarus"}}, 
    { id:2, followed : false, fullName:"Sasha",status: "i like this", location:{city:"Moscow", country:"Russia"}},
    { id:3, followed : true, fullName:"Masha",status: "i like this", location:{city:"Moscow", country:"Russia"}}, 
    { id:4, followed : false, fullName:"Peti",status: "i like this", location:{city:"Moscow", country:"Russia"}}, 
  ]
 };


const usersReducer = (state = initialState, action)=>{
if (action.type = "FOLLOW"){
  
}
      return state;
    }
    export default postReducer;








