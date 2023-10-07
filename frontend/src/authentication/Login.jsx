
import { useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import { apicall } from '../apiCall';

const Login = () => {
  const { dispatch} = useContext(AuthContext);

  const email = useRef();

  const password = useRef();

    //fetching data
    const ClickHandle =async(e)=>{
      e.preventDefault();
     
        apicall({email:email.current.value, password:password.current.value }, dispatch);
    }

  return (

    
    <>
    <div className="register">
      <div className="registerItem">
     
      <form action="" className="registerform" onSubmit={ClickHandle}>
        <span className="regTitle">Login Here !</span>

            <input className='textareas'
             type="text"
             name='email'
             placeholder='example@gmail.com'
             ref={email}
             required
              />
             
              <input className='textareas'
             type="password"
             name='password'
             placeholder='Password'
            required
             ref={password}
              />

              <button type='submit' className='textareas btntext-1'> Login</button>
              <span className="alreadyUser">Didn't Have Account !<Link to='/register' className='l-00'> register here!</Link></span>
        </form>

        
      </div>
        
    </div>
    </>
  )
}

export default Login
