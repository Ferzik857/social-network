import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { UsersType } from '../../types/types';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUsersCount: number, 
    pageSize: number, 
    currentPage: number, 
    onPageChanged: (pageNumber: number)=> void 
    portionSize?: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: React.FC<PropsType> = (props) => {
    return <div>
    < UsersSearchForm /> 
       <Paginator  currentPage={props.currentPage} onPageChanged={props.onPageChanged}
       totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
       
 {props.users.map(u => < User user={u} followingInProgress = {props.followingInProgress}
 key = {u.id}  unfollow = {props.unfollow} follow ={props.follow}/>)
 }
     </div>   
   } 


const usersSearchFormVilidate = (values:any) => {
  const errors = {};
        return errors; 
}

type FormikType = {
  term:string
}


const UsersSearchForm =()=>{

  const submit = (values:FormikType, { setSubmitting}:{ setSubmitting:(isSubmitting:boolean)=>void} ) => {
  
  }

  return  <div>
    <Formik
      initialValues={{ term: ''}}
      validate={usersSearchFormVilidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
     </div>
}

 export default Users;












