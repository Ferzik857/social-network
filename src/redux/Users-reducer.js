let initialState =  {
  users:[]
};


const usersReducer = (state = initialState, action)=>{

  if (action.type == "UNFOLLOW"){
    return {...state, users: state.users.map(u =>{
      if (u.id === action.userId){return {...u, followed: false}}
      return u;
    })
    }
  } 
  if (action.type == "FOLLOW"){
  return {...state, users: state.users.map(u =>{
  if (u.id === action.userId){return {...u, followed: true}}
  return u;
})
}
} 

 if (action.type == "SET_USERS"){
  return {...state, users: [...state.users, ...action.users]}
} 
return state
      
    }
    export default usersReducer;









