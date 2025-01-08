import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import ProfileContext from "../Context/ProfileContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import NotificationModal from "../Modals/NotificationModal";
import BgImg from "../assets/Images/splash-img.png";


const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setMsisdn } = useContext(ProfileContext);
  const { auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cli = queryParams.get("cli");
    const sid = queryParams.get("sid");

    if (cli) {
      const decodedCli = atob(cli);
      setMsisdn(decodedCli);
      localStorage.setItem("cli", decodedCli);
      localStorage.setItem("sid", sid);

      checkSubscription(decodedCli, sid);
    } else {
      setLoading(false);
    }
  }, [location.search, setMsisdn]);

  const checkSubscription = async (msisdn, serviceId) => {
    try {
      const response = await axios.post(
        "https://be-spin-mtn.ydafrica.com/api/v1/checkstatus",
        { msisdn, serviceId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.data.State === "Active") {
        localStorage.setItem("isSubscribed", "true");
        localStorage.setItem(
          "lastBillingDate",
          response.data.data.LastBillingDate
        );
        localStorage.setItem(
          "subscriptionDate",
          response.data.data.SubscriptionDate
        );
        navigate("/");
      } else {
        localStorage.setItem("isSubscribed", "false");
        setIsModalOpen(true);
        setErrorMessage(
          "Your subscription is inactive. Please subscribe to continue."
        );
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.msg ||
        "There was an error checking your subscription status.";
      setErrorMessage(errorMsg);
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div
    className="relative flex flex-col items-center justify-center h-screen text-white"
    style={{
      backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
      backgroundSize: "cover",
    }}
  >
      {loading ? (
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size="3x"
            className="text-white"
          />
          <h1 className="text-xl font-semibold font-mtn-brighter-bold mt-4">
            Redirecting...
          </h1>
        </div>
      ) : (
        <div className="text-center">
          {errorMessage ? (
            <p className="text-red-500 font-medium font-mtn-brighter-medium">
              {errorMessage}
            </p>
          ) : (
            <p className="text-gray-700">Please wait while we redirect you.</p>
          )}
        </div>
      )}

      <NotificationModal isOpen={isModalOpen} />
    </div>
  );
};

export default RedirectPage;




