import { ResultCodesforCaptcaEnum } from './../api/api';
import { authAPI, ResultCodesEnum, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form"
const SET_USER_DATA = "samurai-networt/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";



let initialState =  {
    userId:null as number | null,
    email:null as string | null,
    login:null as string | null,
    isAuth: false ,
    captchaUrl: null as string | null
  };
  
  export type InitialStateType = typeof initialState 

  const authReducer = (state = initialState, action: any):InitialStateType=>{
  
  
    if (action.type == SET_USER_DATA){
      return {...state, ...action.payload }
    } 
    if (action.type == GET_CAPTCHA_URL_SUCCESS){
      return {...state, ...action.payload }
    } 
  
  return state
        
      }

type SetAuthUserDataActionPayloadType ={
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA, 
  payload: SetAuthUserDataActionPayloadType
}

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {url: string}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId,email,login,isAuth}})
export const getCaptchaUrlSuccess  = (url: string):getCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {url}})
export const getAuthUserData = () => async (dispatch: any) => {
 let meData = await authAPI.me()
  
  if (meData.resultCode === ResultCodesEnum.Success){
      let {id, login, email} = meData.data;
      dispatch(setAuthUserData(id, email, login, true));
  }
 
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string )=> async (dispatch:any)=>{
 
  let loginData = await authAPI.login(email, password, rememberMe, captcha)
  
  if (loginData.resultCode === ResultCodesEnum.Success){
      dispatch(getAuthUserData())
  }else{
    if(loginData.resultCode === ResultCodesforCaptcaEnum.captchaIsRequired){
      dispatch(getCaptchaUrl())
    }
    let message = loginData.messages.length > 0 ? loginData.messages[0]:"Some error"
    dispatch(stopSubmit("login", {_error:message}));
  }
}
export const logout = ()=> async (dispatch: any)=>{
  let response = await authAPI.logout()
  if (response.data.resultCode === 0){
      dispatch(setAuthUserData(null, null, null, false))
  }
}
export const getCaptchaUrl = ()=> async (dispatch: any)=>{
  let response = await securityAPI.getCaptchaUrl()
 const captchaUrl = response.data.url;
 dispatch(getCaptchaUrlSuccess(captchaUrl))
}


      export default authReducer;
     