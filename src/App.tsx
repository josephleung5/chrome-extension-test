import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import UserProfile from './components/UserProfile/UserProfile'
import { isLoginSuccess } from './components/LoginForm/LoginForm.utils'

function App() {
  const [isLogin, setIslogin] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)

  const loginCallback = (name: string, password: string): boolean => {
    if (isLoginSuccess(name, password)) {
      localStorage.setItem('name', name)
      setIslogin(true)
      setUserName(name)
      return true
    } else {
      return false
    }
  };

  const logoutCallback = () => {
    localStorage.setItem('name', '')
    setIslogin(false)
    setUserName('')
  }

  useEffect(() => {
    const userName = localStorage.getItem('name')
    if (localStorage.name) {
      setIslogin(true)
      setUserName(userName)
    }
  }, [])

  return (
    <>
      {isLogin && userName
        ?
        <UserProfile 
          userName={userName}
          logoutCallback={logoutCallback}
        />
        :
        <LoginForm
          loginCallback={loginCallback}
        />
      }
    </>
  );
}

export default App;
