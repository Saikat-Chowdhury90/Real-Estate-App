import jwt from 'jsonwebtoken'

const sendToken = async (user, statusCode, res) => {

  const options = {
    expires: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ),
   // httpOnly: true,
  };

    jwt.sign(user.username,"taylorswift", (err, token) => {

     res.status(statusCode).cookie("token", token, options).json({
            success: true,
            user,
            token
        })
    });

  };
  
export default sendToken