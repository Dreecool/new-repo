import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Axios from 'axios'

const Login = () => {



  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const Navigate = useNavigate()

  const loginInfo = {

    email_address: email,
    password: pass

  }

  const Submit = () => {

    Axios.post("http://localhost:3001/loginUser", loginInfo).then((response) => {

    if(response.data.message === "Login successful") {
      Navigate("/welcome")
    }


    })

  }



  
  return (


    <>


      <p>Login</p>

      <div className="form-div">
        <input value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input value={pass} onChange={(e) => {setPass(e.target.value)}}/>
        <button onClick={Submit}>Login</button>
      </div>

      <Link to='/reg'>Signup</Link>
      


    </>



  )
}

export default Login