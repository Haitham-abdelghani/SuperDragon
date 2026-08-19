
import {useForm} from "react-hook-form";

export  function LoginForm(){
const {register,handleSubmit}= useForm();

const onSubmit=(data:any)=>{
  console.log('submit data:', data);
}
return(
  <>
  <form onSubmit={handleSubmit(onSubmit)} >
    <label htmlFor="username">User Name</label>
    <input {...register('username')} type="text" placeholder="User Name" id="username"></input>

    <label htmlFor="password">Password</label>
    <input {...register('password')} type="password" placeholder="Password" id="password"></input>

    <button type="submit">Login</button>
  </form>
  </>
)
}