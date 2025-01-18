import React from "react";
import BgImg from "../assets/Images/splash-img.png";

const SubscriptionExpiredPage = () => {
  const handleRenewSubscription = () => {
    window.location.href =
      "https://sdp-p-vas-payment.telkom.co.za/30?ext_ref=123456776";
  };

  return (
    <div
      className="relative flex flex-col items-center  h-screen text-white"
      style={{
        backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex justify-center items-center mt-[180px]">
        <h1
          style={{
            textShadow: "0px 4px 4px #FFFFFF40",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
          className=" text-[46px] leading-[55.2px] tracking-spacing-4 text-center  shadow-custom-drop font-bold font-alien bg-[#0258FD66] text-[#ffffff]  border-4 border-[#16D1F9] rounded-[24px]  px-[43px] py-[46px]"
        >
          GAMEWIN
        </h1>
      </div>
      <h1 className="text-2xl font-bold font-alien mt-8 ">
        Subscription Expired
      </h1>
      <p className="text-sm font-alien mt-4 mx-4 text-center">
        Your subscription has ended. Please renew to continue using the app.
      </p>
      <button
        onClick={handleRenewSubscription}
        className="bg-btn-background text-white text-[14px] font-bold font-alien leading-[16.8px] text-center px-4 py-3 rounded-[24px] mt-4 mb-[12px]"
      >
        Renew Subscription
      </button>
    </div>
  );
};

export default SubscriptionExpiredPage;
