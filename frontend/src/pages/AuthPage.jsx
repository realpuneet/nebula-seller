import { useState } from 'react'
import LoginForm from "../components/LoginForm";
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
    const [flag, setflag] = useState(false)
  return (
   <div>
        {flag ? <RegisterForm setflag={setflag} /> : <LoginForm setflag={setflag} />}
    </div>
  )
}

export default AuthPage;