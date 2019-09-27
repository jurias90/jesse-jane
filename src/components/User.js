import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

  const user = useSelector(state => state.user.user)

  return (
    <div>
      {user.firstName}
      {user.lastName}
      {user.email}
      {user.username}
      {user.password}
    </div>
  )
}

export default User
