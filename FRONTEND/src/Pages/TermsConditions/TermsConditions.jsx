import React from 'react'

import './TermsConditions.css'

import Button1 from '../../Components/Button1/Button1'



const TermsConditions = () => {

  const [isChecked, setIsChecked] = React.useState(false);

  return (

    <div>
          <div className='TermsConditionsContainer'>
              <div className='TermsConditionsContainerTitle'>
                <img src="termsConditionIcons.svg" alt='noimg'></img>
                <h1 className='TermsConditionsTitle'>
                  Terms & Conditions
                  Privacy Policy
                </h1>
              </div>
          
          <div className='TermsConditionsTextContainer'>
              <div className='TermsConditionsTextContainer2'>
                  <label className='TermsConditionsCheckBox'>
                    <input checked={isChecked} type="checkbox" id="cbox1" value="TermsConditionsCheckBox" onChange={()=>setIsChecked(!isChecked)}/>
                    <span className="checkmark"></span>
                  </label>
                  <h1 className='TermsConditionsText'>
                    By clicking on "Start KYC", I confirm that I have read and understood the General Terms and Conditions, the Privacy Policy and the information on the right of withdrawal and agree to their validity. I have also taken note
                    of the General Terms and Conditions of the IAMX partners and accept them. I have read the pre-contractual information and contract summary and accept them.
                  </h1>
              </div>
              <Button1 text={"Start KYC"} active={isChecked}/>
          </div>


          </div>
    </div>
  )
}

export default TermsConditions