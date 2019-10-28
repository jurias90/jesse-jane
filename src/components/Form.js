import React , {useEffect , useState} from 'react';
import { useSelector, connect } from 'react-redux'
import { updateUser } from '../redux/ducks/user'

import useForm  from "../hooks/useForm"

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateUser: (payload) => dispatch(updateUser(payload))
})

// const mapStatetoProps = (state, ownProps) => ({
//   user: state.user
// })

const Input = ({name , value, onChange, form , validations, errors}) =>{

  const [validation, setValidation] = useState({border: "1px solid black"})
  const [error, setError] = useState("")


  useEffect(() => {
    if(!validations){
      setValidation({border: "1px solid black"})
    }else{
      !validations[name] ? setValidation({border: "1px solid red"}) : setValidation({border: "1px solid black"})
      name in errors ? setError(errors[name]) : setError("")
    }

  },[value])

  return(
    <div>
      <input name={name} value={value} onChange={onChange} style={validation}
      />
      <p>
        <small style={{color : "red"}}>{error}</small>
      </p>
    </div>

  )
}

const Form = ({ dispatchUpdateUser }) => {
  const user = useSelector((state) => state.user.user)
  
  const form = useForm({ form:user })

  const onChange = (event) => {
    const { target: { name, value } } = event;
    dispatchUpdateUser({
      [name]: value
    })
    
  }
    useEffect(() => { 

  }, [user]) 
  // useEffect(() => {
  //   dispatchIsValid(true or false base on if they filled out the form)
  // }, [user.firstName, user.lastName])

  // Add password
  // Add submit, disable until valid

  return (
    <div>
      <p>First Name:</p>
      <Input name="firstName" value={user.firstName} onChange={onChange} form = {user} 
        validations = {form.validations} errors= {form.errors}
      />
      <p>Last Name:</p>
      <Input name="lastName" value={user.lastName} onChange={onChange} form = {user} 
        validations = {form.validations} errors= {form.errors}
      />
      <p>Email: </p>
      <Input name="email" value ={user.email} onChange={onChange} form={user} 
        validations ={form.validations} errors= {form.errors}
      />
      <p>UserName</p>
      <Input 
      name="username" 
      value ={user.username} 
      onChange={onChange} 
      form={user} 
      validations = {form.validations}
      errors= {form.errors}
      />
      <p>Password</p>
      <Input 
      type="password" 
      name="password" 
      value ={user.password} 
      onChange={onChange} 
      form={user} 
      validations = {form.validations}
      errors= {form.errors}
      />
      <br />
      <button name="submit" disabled= {!form.isValid} >Submit</button>
    </div>
  )
}

export default connect(undefined, mapDispatchToProps)(Form);
