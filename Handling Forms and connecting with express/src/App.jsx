import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'



function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors,isSubmitting},
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       resolve() 
      }, d * 1000)
    })
  }

  const onSubmit = async (data)=>{
    await delay(2)
    console.log(data)
  }
  return (
    <>
    {isSubmitting && <div>Loading...</div> }
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username",{required: {value:true,message:"This field is required"}, minLength: {value:3,message:"Minimum length is 3"}, maxLength:  {value:8,message:"Maximum length is 8"}})}  type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>  }
          <br />
          <input {...register("password",{minLength: {value:7,message:"Minimum length is 7"}})}  type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>  }
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit"/>
        </form>
      </div>
    </>
  )
}

export default App
