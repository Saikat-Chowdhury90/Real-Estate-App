import axios from 'axios'
import cookies from 'js-cookie'
const API_URL = "http://localhost:8000/api/"

//Register user

const register = async (userData) => {
    const response = await axios.post(API_URL + "register",userData)

    if(response.data)
    {
        localStorage.setItem('user' , JSON.stringify(response.data))
    }

    return response.data
 }

//login
const login = async (userData) => {
    const response = await axios.post(API_URL + "login",userData)
    // console.log(response.data.token);
    if(response.status === 200 )
    {
        // localStorage.setItem('user' , JSON.stringify(response.data))
        const token = response.data.token;
        document.cookie=`token=${token}`;
    }
    else
    {
        window.alert("email or password is incorrect");
        return 
    }

    return response.data
 }

//logout

 const logout =  async () => {
    
  const response = await axios.get(API_URL + 'logout', { withCredentials: true });
  if(response.status === 200) 
  {
    cookies.remove(`token`);
    
    console.log(cookies.get(`token`))
  }
  
 
    
    
 }
 const authService = {
    register,
    logout,
    login
 }
 export default authService