import { FieldValidatorType } from '../../../utils/validators/validators';
import React from 'react'
import styles from "./FormsControls.module.css"
import { Field, WrappedFieldProps } from "redux-form"


export const Textarea:React.FC<WrappedFieldProps> = ({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return(
       <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
           <div>
           <textarea {...input} {...props}/></div>
    { hasError  && <span>{meta.error}</span>}
       </div>
    )
}
export const Input:React.FC<WrappedFieldProps> = ({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return(
       <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
           <div>
           <input {...input} {...props}/></div>
    { hasError  && <span>{meta.error}</span>}
       </div>
    )
}

export function createField<FildKeys extends string> (placeholder:string, name:FildKeys, validators:Array<FieldValidatorType>, component: React.FC<WrappedFieldProps> , props = {}, text ="") { return (
    <div>
        <Field placeholder={placeholder} name={name}
        validators={validators} component={component}
    {...props} />{text} 
    </div>
    
)
}


