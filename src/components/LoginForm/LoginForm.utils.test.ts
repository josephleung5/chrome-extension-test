import { isLoginSuccess } from './LoginForm.utils'

describe(('isLoginSuccess'), () => {
  test('isLoginSuccess return true when password is "passowrd"', () => {
    const name: string = "name"
    const password: string = "password"

    const loginStatus = isLoginSuccess(name, password)

    expect(loginStatus).toEqual(true)
  })

  test('isLoginSuccess return false when password is not "passowrd"', () => {
    const name: string = "name"
    const password: string = "notPassword"

    const loginStatus = isLoginSuccess(name, password)

    expect(loginStatus).toEqual(false)
  })
})