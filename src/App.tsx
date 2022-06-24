import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import { isLoginSuccess } from './components/LoginForm/LoginForm.utils'

function App() {
  const [isLogin, setIslogin] = useState(false)

  const loginCallback = (name: string, password: string): boolean => {
    if (isLoginSuccess(name, password)) {
      localStorage.setItem('name', name)
      setIslogin(true)
      return true
    } else {
      return false
    }
  };

  useEffect(() => {
    localStorage.setItem('name', '')
    if (localStorage.name) setIslogin(true)
  }, [])

  return (
    <>
      {isLogin
        ?
        <div>Logout</div>
        :
        <LoginForm
          loginCallback={loginCallback}
        />
      }
    </>
  );
}

export default App;
