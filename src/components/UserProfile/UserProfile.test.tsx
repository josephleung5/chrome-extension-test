import UserProfile from "./UserProfile"
import { render, screen } from '@testing-library/react'

describe('UserProfile', () => {
  test('render Hi, name', () => {
    const userName = 'name'
    const logoutCallback = () => {}

    render(<UserProfile logoutCallback={logoutCallback} userName={userName} />)
    const name = screen.getByText(userName, { exact: false })

    expect(name).toBeInTheDocument()
  })

  test('render logout button', () => {
    const buttonText = 'Logout'
    const userName = 'name'
    const logoutCallback = () => {}

    render(<UserProfile logoutCallback={logoutCallback} userName={userName} />)
    const logoutButton = screen.getByText(buttonText)

    expect(logoutButton).toBeInTheDocument()
  })
})
