import React from "react";
import { useState } from 'react';
import './Form1.css'
import { HiOutlineMicrophone } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";


function getErrors(input){
  let errors = {};

    //amount Validation
    if (input.amount===''){ 
      errors.amount = "Amount cannot be empty"
    } else{
      errors.amount = ""
    }

    //walletAdress Validation
    if (input.walletAdress===''){ 
      errors.walletAdress = "Wallet Adress cannot be empty"
    } else{
      errors.walletAdress = ""
    }

    //email Validation
    if(input.email===''){
      errors.email = "Email cannot be empty"
    }
    else{
      if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/).test(input.email)){
        errors.email = "Email its not a valid email"
      }
      else{
        errors.email = ""
      }
    }

    //mobileNumber Validation
    if (input.mobileNumber===''){ 
      errors.mobileNumber = "Mobile number cannot be empty"
    } else{
      if (!(/\d/).test(input.mobileNumber) ) {  
      errors.mobileNumber = "Mobile number must be a number"
      }else{
      errors.mobileNumber = ""
      }
    }

    //WalletPool Validation
    if (input.walletPool===''){ 
      errors.walletPool = "WalletPool cannot be empty"
    } else{
      errors.walletPool = ""
    }

    return errors
}


const Form1 = () => {

    const[input,setInput]=useState({
        email:'',
        mobileNumber:'',
        walletPool:'',
        amount:'',
        walletAdress:''
    })

    let [errors, setErrors] = useState({
        email:'',
        mobileNumber:'',
        walletPool:'',  
        amount:'',
        walletAdress:''
    }) 

    function apiCall(){
      console.log("envio completo",input);
      setLoader((false));
    }

    const [loader,setLoader] = useState(false)

    //FUNTION VALIDATE
    const handleChanchge=async (ev)=>{
      setInput((input)=>({...input,[ev.target.name]:ev.target.value}))
      setErrors((errors)=>({...errors,[ev.target.name]:""}))
    }
    
    //FUNCTION SUBMIT
    const handleSubmit= async(e)=>{
        e.preventDefault();
        errors=getErrors(input)
        setErrors(errors)
        errors.email||errors.mobileNumber||errors.walletPool||errors.walletAdress||errors.amount?
          console.log("hay errores")
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
        <h1>Start KYC</h1>
        <h1>To start the KYC, we need the following information.</h1>
      
        <label className="Form1Label">Amount *</label>
        <input type="text" name="amount"  placeholder="Amount of Beneficial Owners" className={errors.amount?" formInput formError":"formInput"}/>
        
        <label className="Form1Label">Wallet Adress *</label>
        <div className="Form1Icon"><AiOutlineQuestionCircle/></div>
        <input type="text" name="walletAdress" placeholder="Your Wallet Adress" className={errors.walletAdress?"formError formInput ":"formInput"}/>
        

        <label className="Form1Label">E-mail *</label>
        <div className="Form1Icon"><AiOutlineQuestionCircle/></div>
        <input type="text" name="email" placeholder="Your E-Mail"  className={errors.email?"formError formInput ":"formInput"} />
        
        <label className="Form1Label">Phone Number *</label>
        <div className="Form1Icon"><AiOutlineQuestionCircle/></div>
        <input type="text" name="mobileNumber" placeholder="Your Phone Number"  className={errors.mobileNumber?"formError formInput ":"formInput"}/>
        
        <label className="Form1Label">walletPool *</label>
        <input type="text" name="walletPool"  placeholder="Wallet Address Pool"  className={errors.walletPool?"formError formInput ":"formInput"}/>

        <button type="submit" name="next" className={loader?"Button1 Button1Disable":"Button1"} value="Button1">{loader?"Loading...":"Next"}</button>
        
        <section className="errorsClass">
            {errors.amount?<div>{errors.amount} </div>:<></>}
            {errors.walletAdress?<div>{errors.walletAdress} </div>:<></>}
            {errors.email?<div>{errors.email} </div>:<></>}
            {errors.mobileNumber?<div>{errors.mobileNumber} </div>:<></>}
            {errors.walletPool?<div>{errors.walletPool} </div>:<></>}
        </section>
      </div>
    </form>
  );
};

export default Form1;