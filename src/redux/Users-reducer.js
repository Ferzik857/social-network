let initialState =  {
  users:[],
  pageSize: 5,
  totalUsersCount:0,
  currentPage:1,
  isFetching: true
};


const usersReducer = (state = initialState, action)=>{


  if (action.type == "SET_USERS"){
    return {...state, users: action.users}
  } 

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
if (action.type == "SET_TOTAL_USERS_COUNT"){
  return {...state, totalUsersCount: action.totalCount}
} 

if (action.type == "SET_CURRENT_PAGE"){
  return {...state, currentPage: action.currentPage}
} 
if (action.type == "TOGGLE_IS_FETCHING"){
  return {...state, isFetching: action.isFetching}
} 
return state
      
    }
    export default usersReducer;









