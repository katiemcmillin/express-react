import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../util/session'


const SignOut = (props) => {
  const { setUser } = props
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      await logOut()
      setUser(null)
      navigate('/')
    }
    signOutUser()
  }, [])

  return ''
}

export default SignOut