import {  Field, Form, Formik } from 'formik';
import React from 'react';




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