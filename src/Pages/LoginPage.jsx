import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Flag from "react-world-flags";
import logo from "../assets/gamewin.png";
import BgImage from "../assets/bg.png";
import { FaSpinner } from "react-icons/fa";
import SubscriptionContext from "../Context/SubscriptionContext";
import NotificationModal from "../Components/Modals/NotificationModal";

const LoginPage = () => {
  const [country, setCountry] = useState("ZA");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    subscriptionStatus,
    fetchSubscriptionStatus,
    isLoading: isSubLoading,
    error,
  } = useContext(SubscriptionContext);
  const [showModal, setShowModal] = useState(false);

  const countries = [
    { code: "NG", label: "Nigeria", dialCode: "+234" },
    { code: "GH", label: "Ghana", dialCode: "+233" },
    { code: "ZA", label: "South Africa", dialCode: "+27" },
    { code: "BJ", label: "Benin", dialCode: "+229" },
    { code: "CM", label: "Cameroon", dialCode: "+237" },
    { code: "CI", label: "Cote d'Ivoire", dialCode: "+225" },
  ];

  const selectedCountry = countries.find((c) => c.code === country);
  const isPhoneNumberValid = phoneNumber.length === 10;

  const handleNextButton = async () => {
    if (isPhoneNumberValid) {
      setIsLoading(true);
      const msisdn = selectedCountry.dialCode.replace("+", "") + phoneNumber;

      const serviceId = 713;

      try {
        const status = await fetchSubscriptionStatus(msisdn, serviceId);

        if (status) {
          navigate("/home");
        } else {
          setShowModal(true);
        }
      } catch (error) {
        console.error("Subscription check failed:", error);
        setShowModal(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-[#f9f9f9] pt-4 pb-16 px-8 rounded-lg shadow-lg w-[90%] max-w-[400px] md:max-w-[610px] relative">
        <div className="absolute inset-0 opacity-50 rounded-lg" />

        <div className="flex justify-center mt-0">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </div>
        <h1 className="text-center font-mochiy text-[12px] font-normal mb-6">
          Play for Fun, Play for Cash
        </h1>

        <div className="mb-6 md:w-1/2 mx-auto">
          <label
            htmlFor="phone"
            className="block text-[10px] font-mochiy font-normal text-[#484848b3] pb-2"
          >
            Phone Number Input
          </label>
          <div className="flex items-center border border-gray-300 rounded-full py-0 px-[20px]">
            <span className=" mr-2 font-mochiy font-normal text-[10px]">
              {selectedCountry?.dialCode}
            </span>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border-none outline-none z-50 font-mochiy font-normal  text-[10px]"
            />
            <Flag code={country} alt={country} className="w-6 h-4 ml-2" />
          </div>
        </div>

        <div className="flex justify-center mt-20 mx-auto md:w-1/2 ">
          <button
            onClick={handleNextButton}
            className={`w-full py-3.5 rounded-full text-[12px] font-semibold font-mochiy text-white ${
              isPhoneNumberValid
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "bg-neutral-300"
            }`}
            style={{ position: "relative", zIndex: 10 }}
            disabled={!isPhoneNumberValid}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin text-white text-2xl mx-auto" />
            ) : (
              "Next"
            )}
          </button>
        </div>

        <NotificationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default LoginPage;
