import { getAuthUserData } from "./auth-reduser";

const SET_INITIALIZED = "SET_INITIALIZED";

export type initialStateType = {
  initialized: boolean
}

let initialState:initialStateType =  {
    initialized: false
  };
  
  
  const appReducer = (state = initialState, action: any):initialStateType =>{
  
  
    if (action.type == SET_INITIALIZED){
      return {...state, initialized: true}
    } 
  
  return state
        
      }

 type setInitializedActionType = {
   type: typeof SET_INITIALIZED
 }     

export const setInitialized = ():setInitializedActionType => ({type: SET_INITIALIZED})

export const initializeApp = ()=>(dispatch: any)=>{
  let promise = dispatch(getAuthUserData())
  Promise.all([promise]).then( () => {dispatch(setInitialized())}
  )
}
 export default appReducer;

