import React, { FormEvent, useRef, useState } from 'react'

type formData = {
    email:string;
    name:String;
    password:string
}



const ContactForm = () => {
    const [inputValues,setInputValues] = useState<formData>({
        email:'',
        name:'',
        password:''
    })


    const inputName = useRef<HTMLInputElement>(null)
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)


    const handlesubmit =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

       const Name = inputName.current!.value 
       const Email  = inputEmail.current!.value 
       const Password = inputPassword.current!.value 

       setInputValues({
             name: Name,
            password:Password,
            email:Email
       })


    }
  return (
    <div>
        

        <form onSubmit={handlesubmit} >
            <input type="text" name="" id="" ref={inputName}/>
            <input type="email" name="" id="" ref={inputEmail}/>
            <input type="password" name="" id="" ref={inputPassword}/>
            <button type='submit'>SuBmit</button>
        </form>
        <div className="">
            <p>Name:{inputValues.name}</p>
            <p>Email:{inputValues.email}</p>
            <p>Password:{inputValues.password}</p>
           
        </div>
    </div>
  )
}

export default ContactForm