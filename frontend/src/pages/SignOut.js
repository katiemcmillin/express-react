import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../util/session'


const SignOut = (props) => {
  const { setUser, user } = props
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      const response = await logOut();
      const data = await response.json();
      console.log(data)
      setUser(null)
      navigate('/')
    }
    signOutUser()
  }, [])

  return ''
}

export default SignOut