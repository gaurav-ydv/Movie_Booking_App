import React,{useState} from 'react';
import './Sign-Up.css';
import validator from 'validator'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;


const Sign_Up = () =>{
    const [enteredemail,setenteredemail] = useState('');                                       //state for email
    const [enteredName,setenteredName] = useState('');                                        //state for Full Name
    const [enteredpassword,setenteredpassword] = useState('');                               // state for password
    const [enteredconfirmpassword,setenteredconfirmpassword] = useState('');                // state for confirm password
    const [passwordShown, setPasswordShown] = useState('');                                // state for hide/show password
    const [cpasswordShown, setcPasswordShown] = useState('');                             // state for hide/show confirmpassword
    const [emailError, setEmailError] = useState('');                                    // state for email validation
    const [pswdError, setpswdError] = useState(false);                                  // sate for password validation
    const [passwordError, setpasswordError] = useState('');                            // sate for password = confirm password

    
  
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const togglecPasswordVisiblity = () => {
        setcPasswordShown(cpasswordShown ? false : true);
    };
    
      const AddUserHandler = event =>{
        event.preventDefault();
          const newuser = {
                  id : Math.random.toString(),
                  name     : enteredName,
                  email    : enteredemail,
                  password : enteredpassword };
         
          setenteredpassword('');
          setenteredemail('');
          setenteredconfirmpassword('');
  
     };
    
     
   
  
    const emailChange = event =>{
         setenteredemail(event.target.value);
         
            var email = event.target.value;  
                   if (!validator.isEmail(email)) { 
                    setEmailError('Enter a Valid Email')
                   }
                   else {
                    setEmailError('')
                   }
                };
    const NameChange = event =>{
         setenteredName(event.target.value);
                };
  
    const passwordChange = event =>{
      setenteredpassword(event.target.value);
      if(event.target.value.length < 8)
      {
          setpswdError("Password should atleast be 8 characters long");
      }
      else{
            setpswdError(" ");
      }
         
    }


    const confirmpasswordChange = event =>{
      setenteredconfirmpassword(event.target.value);  
    if(enteredpassword == event.target.value){ 
        setpasswordError('');
       } 
    else {
        setpasswordError('Password does\'t match');
    }     
    }

return( 
    
    <div class = "div">

     <h2>

      <form>
      <div> <label>Full Name</label><br/>
        <input 
        type="text"  
        value = {enteredName} 
        onChange = {NameChange} 
        placeholder="Enter Your Full Name Here"/>
        <br/>
        </div>

       <div> <label>Email</label><br/>
        <input 
        type="text"  
        value = {enteredemail} 
        onChange = {emailChange} 
        placeholder="Enter Your Email Here"/>
        <br/>
        </div>
     
        <div>
          <div>
        <label>Password</label><br/>
        <input 
        type={passwordShown ? "text" : "password"} 
        value = {enteredpassword} 
        onChange = {passwordChange} 
        placeholder="Enter Your Password Here"/>
        <i onClick={togglePasswordVisiblity} 
        class="i1">{eye}</i>
        <br/>
    
        </div>
          <div>
        <label>Confirm Password</label><br/>
        <input 
        type={cpasswordShown ? "text" : "password"} 
        value = {enteredconfirmpassword} 
        onChange = {confirmpasswordChange} 
        placeholder="Re-enter Your Password Here"/>
        <i onClick={togglecPasswordVisiblity} 
        class="i2">{eye}</i>
        <br/>
        </div>
        </div>

        <div>
        <span style={{  
          color: 'red', 
            }}>{emailError}</span>
        </div>
         
         <div>
        <span style={{  
          color: 'red', 
            }}>{pswdError}</span> 
        </div>

        <div><span style={{  
          color: 'red', 
            }}>{passwordError}</span> 
        </div>

        <input 
        type="submit" 
        value = "Sign-Up"/>
        <br/>

    </form>

    </h2>

</div>
);
};

export default Sign_Up;