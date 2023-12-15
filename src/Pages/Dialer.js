import React, { useCallback, useState } from "react";
import backspace from "../Assets/Images/backspace.svg";
import CallIcon from "../Assets/Images/CallIcon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToDisplay } from "../Redux/dialerSlice";
import { addLog } from "../Redux/callLogSlice";

const DialPad = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDigitClick = useCallback(
    (value) => () => {
      setPhoneNumber((phoneNumber) => phoneNumber.concat(value));
    },
    []
  );
  
  const handleDialClick = () => {
    dispatch(addToDisplay(phoneNumber));
    dispatch(addLog(phoneNumber));
    Navigate(`/dialed-call/${phoneNumber}`);
  };

  const handleBackspaceClick = () => {
    setPhoneNumber((phoneNumber) => phoneNumber.slice(0, -1));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[320px] bg-black  h-[90%] rounded-lg">
        <div className="flex justify-center text-3xl font-semibold h-20 text-white">
          <p className="mb-0 p-4">{phoneNumber}</p>
        </div>
        <div className="flex flex-wrap justify-around text-white">
          <div className="digit" onClick={handleDigitClick("1")}>
            1<div className="subset"></div>
          </div>
          <div className="digit" onClick={handleDigitClick("2")}>
            2<div className="subdigit">ABC</div>
          </div>
          <div className="digit" onClick={handleDigitClick("3")}>
            3<div className="subdigit">DEF</div>
          </div>
          <div className="digit" onClick={handleDigitClick("4")}>
            4<div className="subdigit">GHI</div>
          </div>
          <div className="digit" onClick={handleDigitClick("5")}>
            5<div className="subdigit">JKL</div>
          </div>
          <div className="digit" onClick={handleDigitClick("6")}>
            6<div className="subdigit">MNO</div>
          </div>
          <div className="digit" onClick={handleDigitClick("7")}>
            7<div className="subdigit">PQRS</div>
          </div>
          <div className="digit" onClick={handleDigitClick("8")}>
            8<div className="subdigit">TUV</div>
          </div>
          <div className="digit" onClick={handleDigitClick("9")}>
            9<div className="subdigit">WXYZ</div>
          </div>
          <div className="digit" onClick={handleDigitClick("*")}>
            *
          </div>
          <div className="digit" onClick={handleDigitClick("0")}>
            0<div className="subdigit">+</div>
          </div>
          <div className="digit" onClick={handleDigitClick("#")}>
            #
          </div>
        </div>
        <div className="flex justify-end py-4">
          <button
            disabled={!phoneNumber}
            className="w-14 mr-14"
            onClick={handleDialClick}
          >
            <img src={CallIcon} alt="icon" />
          </button>
          <button className="w-8 mr-10" onClick={handleBackspaceClick}>
            <img src={backspace} alt="icon" />
          </button>
        </div>
      </div>
      </div>
  );
};

export default DialPad;
