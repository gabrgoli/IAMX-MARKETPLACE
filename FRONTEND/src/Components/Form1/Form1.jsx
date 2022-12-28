import React from "react";
import { useState } from 'react';
import './Form1.css'
import { HiOutlineMicrophone } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const Form1 = () => {

    const[input,setInput]=useState({})
    let [errors, setErrors] = useState({}) 
    const [loader,setLoader] = useState(false)

    //FUNTION SUBMIT
    function apiCall(){
      console.log("envio completo",input);
      setLoader((false));
    }


    //FUNTION HANDLECHANGE
    const handleChanchge=async (ev)=>{
      setInput((input)=>({...input,[ev.target.name]:ev.target.value}))
      setErrors((errors)=>({...errors,[ev.target.name]:""}))
    }
    
    //FUNCTION HANDLESUBMIT
    const handleSubmit= async(e)=>{
        e.preventDefault();
        errors=getErrors(input)
        setErrors(getErrors(input))
        Object.entries(errors).length !== 0?
          console.log("Show errors:",errors)
          :
          (
            setLoader(true)
            (setTimeout(apiCall, 3000))
          )
  }
    


  return (
    <form 
        className="Form1"
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChanchge(e)}
    >
      <div>
        <h1 id='FormTitle'>Start KYC</h1>
        <h1 id='FormSubTitle'>To start the KYC, we need the following information.</h1>

        <label className="Form1Label">E-mail *</label>
        <div className="Form1InputIconBox">
          <AiOutlineQuestionCircle/>
          <input type="text" name="email" placeholder="Your E-Mail"  className={errors.email?"formError formInput ":"formInput"} />
        </div>
        
        <label className="Form1Label">Phone Number *</label>
        <div className="Form1InputIconBox">
          <AiOutlineQuestionCircle/>
          <input type="text" name="mobileNumber" placeholder="Your Phone Number"  className={errors.mobileNumber?"formError formInput ":"formInput"}/>
        </div>
        
        <label className="Form1Label">Wallet Adress *</label>
        <div className="Form1InputIconBox">
          <AiOutlineQuestionCircle/>
          <input type="text" name="walletAdress" placeholder="Your Wallet Adress" className={errors.walletAdress?"formError formInput ":"formInput"}/>
        </div>
        
        <button type="submit" name="next" className={loader?"Button1Disable":"Button1A"} value="Button1">{loader?"Loading...":"Next"}</button>
        
        <section className="errorsClass">
        {
            Object.values(errors).map((error,i) => {
              return <div key={i}>{error}</div>
            })
        }
        </section>
      </div>
    </form>
  );
};

export default Form1;


function getErrors(input){
  let errors = {};

  //email Validation
  if (!input.email){errors.email = "Email cannot be empty"}
  else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(input.email)){errors.email = "Email its not a valid email"}
  
  //mobileNumber Validation
  if (!input.mobileNumber){ errors.mobileNumber = "Mobile number cannot be empty"} 
  else if(!(/\d/).test(input.mobileNumber)) {errors.mobileNumber = "Mobile number must be a number"}
  
  //walletAdress Validation
  if (!input.walletAdress){ errors.walletAdress = "Wallet Adress cannot be empty"} 

  return errors
}

