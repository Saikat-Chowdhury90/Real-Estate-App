import React from "react";
import "./LoginCss.css";
import { Link } from 'react-router-dom'
import { useState , useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { login , reset } from "../../features/authSlice";
function LoginComponent() {
  const [formData, setformData] = useState(
    {
        
        email: '',
        password: ''
    }
  )

  const {email , password } = formData
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
    if(isSuccess && user)
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
          email,
          password
        }


        dispatch(login(userData))
  }


  return (
    <div className="login-container">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><div className="close-btn">&times;</div></Link>
      <h2>Login</h2>
      {/* <button className="google-btn">Continue with Google</button>
      <button className="facebook-btn">Continue with Facebook</button>
      <div className="separator">
        <span>OR</span>
      </div> */}
      <form onSubmit={onSubmit}>
        <input id='email' name='email' value={email}  type="email" placeholder="email"  onChange={onChange} />
        <input id='password' name='password' value={password} type="password" placeholder="Password" onChange={onChange} />
        <button className="submit-btn" type="submit">
          Log in
        </button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="separator"></div>
      <div className="signup-option">
        <span>If you don't have an account?</span>
        <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginComponent;
