import React , {useEffect} from 'react';
import { useSelector, connect } from 'react-redux'
import { updateUser } from '../redux/ducks/user'

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateUser: (payload) => dispatch(updateUser(payload))
})

// const mapStatetoProps = (state, ownProps) => ({
//   user: state.user
// })

const Form = ({ dispatchUpdateUser }) => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const user = useSelector((state) => state.user.user)

  const onChange = (event) => {
    const { target: { name, value } } = event;
    dispatchUpdateUser({
      [name]: value
    })
    
  }
    useEffect(() => { 
    if(user.firstName.length != 0 && user.lastName.length != 0 && user.email.length != 0 && user.password.length != 0 && user.username.length !=0){
      dispatchUpdateUser({
        isEnabled:true
      })
    }
  }, [user]) 
  // useEffect(() => {
  //   dispatchIsValid(true or false base on if they filled out the form)
  // }, [user.firstName, user.lastName])

  // Add password
  // Add submit, disable until valid

  return (
    <div>
      <p>First Name:</p>
      <input name="firstName" value={user.firstName} onChange={onChange} />
      <p>Last Name:</p>
      <input name="lastName" value={user.lastName} onChange={onChange} />
      <p>Email: </p>
      <input name="email" value ={user.email} onChange={onChange} />
      <p>UserName</p>
      <input name="username" value ={user.username} onChange={onChange} />
      <p>Password</p>
      <input type="password" name="password" value ={user.password} onChange={onChange} />
      <br />
      <button name="submit" disabled= {!user.isEnabled} >Submit</button>
    </div>
  )
}

export default connect(undefined, mapDispatchToProps)(Form);
