import { useState } from 'react';
import { useRef } from 'react';
import './Form.css'
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidatory';
function Form() {

    const emailRef = useRef(null);
    const passRef = useRef(null);

    const [formvalue, setFormValue] = useState({
        email: "",
        password: ""
    });
    
    const handleValidatePassword = () => {
        const password = formvalue.password;
        if(!validatePassword(password)) {
            console.log("Passwrod doesnt contain require values");
            if(passRef.current){
                passRef.current.style.borderColor = 'red';
            }
        }else{
            if(passRef.current){
                passRef.current.style.borderColor = 'initial';
            }
        }
    }
    const handleValidateEmail = () => {
        const email = formvalue.email;
        if(!validateEmail(email)){
            console.log("Email doesnt contain require values");
            if(emailRef.current){
                emailRef.current.style.borderColor = 'red';
            }
            
        }else{
            if(emailRef.current){
                emailRef.current.style.borderColor = 'initial';
            }
        }
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidatePassword();
        handleValidateEmail();
        console.log(formvalue)
    }

    return(
        <div>
            New form
            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input 
                        type="text" 
                        value={formvalue.email}
                        onChange={(event) => setFormValue({...formvalue, email: event.target.value})}
                        onBlur={handleValidateEmail}
                        ref={emailRef}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <input 
                        type="password" 
                        value={formvalue.password}
                        onChange={(event) => setFormValue({...formvalue, password: event.target.value})}
                        onBlur={handleValidatePassword}
                        ref={passRef}
                    />
                </div>
                <input type="Submit" />
            </form>
        </div>
    )
}

export default Form;