import {  useState } from "react";
import { useInput } from "../hooks/useInput.js";
import {isEmail,isNotEmpty,hasMinLength} from '../util/validation.js'
import Input from "./Input.jsx";


export default function Login() {


 const {value:emailValue, 
  handleInputChange:handleEmailChange, handleInputBlur:handleEmailBlur,hasError:emailHasError} =  useInput('',(value)=>{
   return isEmail(value) && isNotEmpty(value);
  });

  const {value:passwordValue, 
    handleInputChange:handlePasswordChange,
     handleInputBlur:handlePasswordBlur,
    hasError:passwordHasError
    } =  useInput('',(value)=>hasMinLength(value,6));

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('')

  function handleSubmit(event){
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return;
    }
    console.log(emailValue,passwordValue);
    setEnteredValues({
      email:'',
      password:''
    })
  }

 

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value);
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" value={emailValue} 
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        error={emailHasError && 'Please enter a valid email'}
        />

      <Input label="Password" id="password" type="password" name="password" 
        value={passwordValue}
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
        error={passwordHasError && 'Please enter a valid password'}
        />

        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
