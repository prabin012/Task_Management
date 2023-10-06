
import './register.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './register.css'
import axios from 'axios'
const URL = "http://localhost:7550"

const Register = () => {
  const [alerts, setAlerts] = useState(null);
  const [alertemail, setAlertemail] = useState(null);
  const [msg, setMsg] = useState(null);
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
  })
  const history =useNavigate();
    const handleChange =(e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
       
    }
    const ClickHandle =async(e)=>{
      e.preventDefault();
      try {
        const res = await axios.post(`${URL}/createUser`,data)
        console.log("Data posted",res.data)
        if(res.data.success===true){
          setMsg("User created successfylly..")
          alert("user created...")
          setTimeout(() => {
            history('/login')
            setMsg(false)
          }, 2000);
          
        }
      } catch (error) {
        if (error.response) {
          const status = error.response.status;
    
          if (status === 404) {
            setAlerts('username already exit!');

            setTimeout(()=>{
              setAlerts(false)
            },500000)
          } else {
            setAlertemail('email already registerd!');
          }
        } else {
          console.log('Error found - ', error);
        }
      }
    }
  return (
    
    <>
    <div className="register">
      <div className="registerItem">
      <form action="" className="registerform" onSubmit={ClickHandle}>
        <span className="regTitle">Register Here !</span>
            <input className='username textareas'
            type="text"
            name='name'
            value={data.name}
           placeholder='name'
            onChange={handleChange}
            required
              />
              
           
             
            <input className='textareas'
             type="text"
             name='email'
             value={data.email}
             onChange={handleChange}
             placeholder='example@gmail.com'
             required
              />
             
            
              <input className='textareas'
             type="password"
             name='password'
             placeholder='Password'
             value={data.password}
             onChange={handleChange}
             required
              />

              <button type='submit' className='textareas  btntext-1'> Register</button>

              <span className="alreadyUser">Already registered !<Link to='/login' className='l-00'> login here!</Link></span>
        </form>

        
      </div>
        
    </div>
    </>
  )
}

export default Register
