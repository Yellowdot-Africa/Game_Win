import React from "react";
import { useNavigate } from "react-router-dom";


const NotificationModal = ({ isOpen }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleGotItClick = () => {
    navigate("/subscribe");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded shadow-lg p-8 py-16 px-6 mx-4 w-full md:w-[444px] text-center">
        <h2 className="text-[18px] text-[#484848] font-alien font-semibold mb-4">
          Notification
        </h2>
        <p className="text-[14px] text-[#484848] font-alien mb-6">
          Hello, You are currently not subscribed to Game Win.
        </p>
        <button
          onClick={handleGotItClick}
          className="px-4 py-2 text-indigo-500  font-alien text-[14px]"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
