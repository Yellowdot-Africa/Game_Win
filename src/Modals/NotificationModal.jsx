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
      <div className="bg-[#070E3C] px-6 py-16 border border-[#16D1F9] rounded-[20px] shadow-box-shadow max-w-sm w-full text-center mx-4">
        <h2 className=" font-normal leading-[19.2px] text-center mb-4 text-[18px] font-alien">
          Notification
        </h2>
        <p className="text-center mb-6 leading-[19.88px] text-[14px] font-normal font-alien">
          Hello, You are currently not subscribed to Game Win.
        </p>
        <button
          onClick={handleGotItClick}
          className="text-center py-1  text-[14px] leading-[19.2px] font-normal font-alien"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
