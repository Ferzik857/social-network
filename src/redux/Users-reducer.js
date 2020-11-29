let initialState =  {
    users:[
    { id:1, fotoUrl: 'https://www.rusdialog.ru/images/news/384b698d6a21145c370ab54f2db3366c.jpg', followed : true, fullName:"Dima",status: "i like this", location:{city:"Minsk", country:"Belarus"}}, 
    { id:2, fotoUrl: 'https://www.rusdialog.ru/images/news/384b698d6a21145c370ab54f2db3366c.jpg',followed : false, fullName:"Sasha",status: "i like this", location:{city:"Moscow", country:"Russia"}},
    { id:3, fotoUrl: 'https://www.rusdialog.ru/images/news/384b698d6a21145c370ab54f2db3366c.jpg',followed : true, fullName:"Masha",status: "i like this", location:{city:"Moscow", country:"Russia"}}, 
    { id:4, fotoUrl: 'https://www.rusdialog.ru/images/news/384b698d6a21145c370ab54f2db3366c.jpg',followed : false, fullName:"Peti",status: "i like this", location:{city:"Moscow", country:"Russia"}}, 
  ]
 };


const usersReducer = (state = initialState, action)=>{
if (action.type = "FOLLOW"){
  return {...state, users: state.users.map(u =>{
  if (u.id === action.userId){return {...u, followed: true}}
  return u;
})
}

}
if(action.type = "UNFOLLOW"){
  return {...state, users: state.users.map(u =>{
    if (u.id === action.userId){return {...u, followed: false}}
    return u;
  })
  }
}
if(action.type = "SET_USERS"){
  return {...state, users: [...state.users, ...action.users]}
}
      return state;
    }
    export default usersReducer;









