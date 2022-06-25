import React, { useState } from 'react'
import { 
  Label,
  TextInput,
} from 'flowbite-react'
import Button from '../common/Button/Button'

interface LoginFormProps {
  loginCallback: (name: string, password: string) => boolean
}

const LoginForm = (props: LoginFormProps) => {
  const {
    loginCallback,
  } = props

  const [name, setName] = useState('')
  const [isNameEmpty, setIsNameEmpty] = useState(false)
  const [password, setPassword] = useState('')
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
  const [isLoginSuccess, setIsLoginSuccess] = useState(true)

  const resetEmptyStatus = () => {
    setIsNameEmpty(false)
    setIsPasswordEmpty(false)
    setIsLoginSuccess(true)
  }

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    resetEmptyStatus()

    if (!name || !password) {
      if (!name) setIsNameEmpty(true)
      if (!password) setIsPasswordEmpty(true)
      return
    }

    const login = loginCallback(name, password)
    setIsLoginSuccess(login)
  }

  return (
    <div className="p-2">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Name"
            />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="name"
            required
            color={isNameEmpty || !isLoginSuccess ? 'red' : 'base'}
            helperText={isNameEmpty || !isLoginSuccess ? <React.Fragment><span className="font-medium">Invalid Login</span></React.Fragment> : ''}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="password"
            required
            color={isPasswordEmpty || !isLoginSuccess ? 'red' : 'base'}
            helperText={isPasswordEmpty || !isLoginSuccess ? <React.Fragment><span className="font-medium">Invalid Login</span></React.Fragment> : ''}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button 
          className="text-white bg-orange-400 hover:bg-orange-400/90" 
          onClick={loginHandler}
        >
          Login
        </Button>

        <hr />

        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 dark:focus:ring-[#3b5998]/55">
          <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
          Sign in with Facebook
        </Button>
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55">
          <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
          Sign in with Google
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
