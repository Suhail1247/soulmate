import React, { useState ,useEffect} from 'react';
import './styles/Login.css';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';
import toast, {Toaster} from "react-hot-toast";
import {generateOtp} from "../helper/helper";

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value; 
    const sanitizedValue = value.replace(/[^0-9+]/g, '').slice(0, 13);
    setPhoneNumber(sanitizedValue);
    setIsValid(/^\+\d{1,12}$/.test(value));

  };
  
 

  useEffect(()=>{
    if (token){
      navigate('/userhome')
    }
  },[token])
  async function handleSubmit(e) {
    e.preventDefault();
    if(!phoneNumber){
      const errorMessage = 'Please enter your phone number';
      toast.error(errorMessage);
      return;
    }
    if (!isValid) {

      const errorMessage = 'Please enter your phone number with country code';
      toast.error(errorMessage);
      return;
    }
    
    try {
      const response = await generateOtp(phoneNumber);
      const { status } = response;
    
      if (status === 201) {
        toast.success(`OTP has been sent to ${phoneNumber}`);
        await new Promise(resolve => setTimeout(resolve, 0));
        navigate('/login', { state: { phoneNumber } });
    } else {
        toast.error('Failed to generate OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error during OTP generation:', error);
      toast.error('Failed to generate OTP. Please try again.');
    }  
  }

  return (
    <div className="container-fluid h-100 main">
       <Toaster></Toaster>
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-left">
          <div className='imageContainer'>
            <img
              src='src\assets\log.jpg'
              alt='background'
              className='loginImage img-fluid'
            />
          </div>
          <div style={{ position: 'absolute', left: '12%', top: '40%' }}><Icon /></div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center text-success">
          <div className='right '>
            <p className='rightxt'>Dating made fun<br></br>
              ... without the games.</p>
            <form onSubmit={handleSubmit}>
              <label className='logintxt mt-5'>Login</label><br></br>

              <input
                type='text'
                placeholder='Enter your number'
                className='numberbox' 
                value={phoneNumber}
                onChange={handlePhoneNumberChange}

              />
              <button type='submit'  className="btn" >Next</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
