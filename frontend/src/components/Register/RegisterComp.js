import React from 'react'
import './RegisterComp.css'
import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { register , reset } from "../../features/authSlice";
const RegisterComp = () => {
  const [formData, setformData] = useState(
    {
        username: '',
        email: '',
        password: '',
        name: '',
        mobile: ''
    }
  )

  const {username , email , password , name , mobile} = formData
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user , isLoading , isError , isSuccess , message} = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if(isError)
    {
       toast.error(message)
    }
    if(isSuccess || user)
    {
       navigate('/')
    }

    dispatch(reset())
  } , [user , isError , isSuccess , message , navigate , dispatch])
  const onChange = (e) => {
    setformData((prevState) => ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
          username,
          email,
          password,
          name,
          mobile
        }

        dispatch(register(userData))
  }

  return (
    <div className="login-container">
         <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><div className="close-btn">&times;</div></Link>
      <h2>Register</h2>
     
     
      <form onSubmit={onSubmit}>
        <input id='username' name='username' value={username} type="text" placeholder="UserName" onChange={onChange} />
        <input id='email' name='email' value={email}  type="email" placeholder="email" onChange={onChange}  />
        <input id='password' name='password' value={password} type="password" placeholder="Password" onChange={onChange} />
        <input id='name' name='name' value={name} type="text" placeholder="Full Name" onChange={onChange} />
        <input id='mobile' name='mobile' value={mobile} type="text" placeholder="mobile number" onChange={onChange} />
        <button className="submit-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default RegisterComp