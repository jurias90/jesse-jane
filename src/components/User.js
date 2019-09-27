import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

  const user = useSelector(state => state.user.user)

  return (
    <div>
      {user.firstName}
      {user.lastName}
    </div>
  )
}

export default User
