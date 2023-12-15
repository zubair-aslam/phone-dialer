import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteLog } from "../Redux/callLogSlice";
import { MdDelete } from "react-icons/md";
import { IoIosKeypad, IoIosStar } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";

const CallLogPage = () => {
  const { logs } = useSelector((state) => state.callLog);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between p-8 w-[320px] bg-black  h-[90%] rounded-lg ">
        <div className="overflow-auto	">
          <h2 className="text-white text-2xl mb-4 font-semibold">Recents</h2>
          {logs.map((item, index) => (
            <div
              className="flex items-center justify-between
                gap-3 p-2 bg-gray-600 my-1"
              key={index}
            >
              <p className="text-white mb-0">{item}</p>
              <MdDelete color="red" onClick={() => dispatch(deleteLog(item))} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-2xl">
          <button className="text-white" disabled>
            <IoIosStar />
          </button>
          <button className="text-white" disabled>
            <CiClock2 />
          </button>
          <button className="text-white" disabled>
            <IoMdContact />
          </button>
          <button className="text-white" onClick={() => navigate("/")}>
            <IoIosKeypad />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallLogPage;
