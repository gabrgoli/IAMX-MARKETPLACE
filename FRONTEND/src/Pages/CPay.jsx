//rafc
import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const CPay = () => {
  return (
    <div>
      <NavBar title={"CPay"} />
      <div className="contCPay">
        <h4 className="textCpay">Change the credentials of your identity.</h4>
        <a>Edit</a>
        
        <div className="input-wrapper">
          <input className="inputCpay" />
          <BsFillCheckCircleFill className="icon" />
        </div>

        <div className="input-wrapper">
          <input className="inputCpay" />
          <BsFillCheckCircleFill className="icon" />
        </div>
        
        <div className="input-wrapper">
          <input className="inputCpay" />
          <BsFillCheckCircleFill className="icon" />
        </div>
        
        <button className="buttonCPay">Save Changes</button>
      </div>
    </div>
  );
};

export default CPay;
