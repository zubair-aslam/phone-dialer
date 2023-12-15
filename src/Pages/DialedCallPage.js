import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxSpeakerLoud } from "react-icons/rx";
import { BsCameraVideoOff } from "react-icons/bs";
import { FaMicrophoneAltSlash } from "react-icons/fa";
import { MdOutlinePersonAdd } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import { IoIosKeypad } from "react-icons/io";
import { useSelector } from "react-redux";

const DialedCallPage = () => {

  const { dialedNumber } = useSelector((state) => state.dialer);

  const navigate = useNavigate();
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/call-log");
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between w-[320px] bg-black  h-[90%] rounded-lg">
        <div>
        <div className="flex justify-center content-between font-semibold text-white mt-4">
          <h4>Calling</h4>{" "}
        </div>
        <div className="flex justify-center font-semibold text-3xl text-white mt-2">
          {dialedNumber}
        </div>
        </div>
        <div className="flex flex-wrap justify-around text-white mb-4">
          <div className="digit">
            <RxSpeakerLoud />
          </div>
          <div className="digit">
            <BsCameraVideoOff />
          </div>
          <div className="digit">
            <FaMicrophoneAltSlash />
          </div>
          <div className="digit">
            <MdOutlinePersonAdd />
          </div>
          <div className="digit">
            <MdCallEnd color="red" onClick={()=>navigate("/")} />
          </div>
          <div className="digit">
            <IoIosKeypad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialedCallPage;
