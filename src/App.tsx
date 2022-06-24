import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import UserProfile from './components/UserProfile/UserProfile'
import { isLoginSuccess } from './components/LoginForm/LoginForm.utils'
import { setItem, clearItems } from './helper';

function App() {
  const [isLogin, setIslogin] = useState(false)
  const [userName, setUserName] = useState<any>('')

  const loginCallback = (name: string, password: string): boolean => {
    if (isLoginSuccess(name, password)) {
      localStorage.setItem('name', name)
      setItem(name)
      setIslogin(true)
      setUserName(name)
      return true
    } else {
      return false
    }
  };

  const logoutCallback = () => {
    localStorage.clear()
    clearItems()
    setIslogin(false)
    setUserName('')
  }

  useEffect(() => {
    const userName = localStorage.getItem('name') || ''

    if (userName.length > 0) {
      setItem(userName)
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

export default App
