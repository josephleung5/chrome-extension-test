import Button from '../common/Button/Button'

interface UserProfileProps {
  userName: string;
  logoutCallback: () => void;
}

const UserProfile = (props: UserProfileProps) => {
  const {
    userName,
    logoutCallback,
  } = props

  return (
    <div className="p-2 flex flex-col gap-4">
      <p className="text-center">Hi, {userName}</p>
      <Button 
        className="text-white bg-orange-400 hover:bg-orange-400/90" 
        onClick={logoutCallback}
      >
        Logout
      </Button>
    </div>
  )
}

export default UserProfile
