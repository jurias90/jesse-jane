import React from 'react';
import { useSelector, connect } from 'react-redux'
import { updateUser } from '../redux/ducks/user'

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateUser: (payload) => dispatch(updateUser(payload))
})

// const mapStatetoProps = (state, ownProps) => ({
//   user: state.user
// })

const Form = ({ dispatchUpdateUser }) => {
  const user = useSelector((state) => state.user.user)

  const onChange = (event) => {
    const { target: { name, value } } = event;
    dispatchUpdateUser({
      [name]: value
    })
  }

  // useEffect(() => {
  //   dispatchIsValid(true or false base on if they filled out the form)
  // }, [user.firstName, user.lastName])

  // Add password
  // Add submit, disable until valid

  return (
    <div>
      <input name="firstName" value={user.firstName} onChange={onChange} />
      <input name="lastName" value={user.lastName} onChange={onChange} />
      <input name="email" value ={user.email} onChange={onChange} />
      <input name="username" value ={user.username} onChange={onChange} />
      <input name="password" value ={user.password} onChange={onChange} />
      <button name="submit">Submit</button>
    </div>
  )
}

export default connect(undefined, mapDispatchToProps)(Form);
