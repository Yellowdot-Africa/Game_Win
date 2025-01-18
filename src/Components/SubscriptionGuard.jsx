import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import BgImg from "../assets/Images/splash-img.png";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SubscriptionGuard = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      const msisdn = localStorage.getItem("cli");
      const serviceId = localStorage.getItem("sid") || "";

      try {
        const response = await axios.post(
          "https://be-spin-mtn.ydafrica.com/api/v1/checkstatus",
          { msisdn, serviceId },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data.data.State === "Active") {
          setIsSubscribed(true);
          localStorage.setItem("isSubscribed", "true");
        } else {
          setIsSubscribed(false);
          localStorage.setItem("isSubscribed", "false");
        }
      } catch (error) {
        console.error("Error checking subscription:", error);
        setIsSubscribed(false);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, []);

  if (loading) {
    return (
      <div
        className="relative flex flex-col items-center justify-center h-screen text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        {" "}
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="3x"
          className="text-white "
        />
      </div>
    );
  }

  if (!isSubscribed) {
    return <Navigate to="/subscription-expired" />;
  }

  return children;
};

export default SubscriptionGuard;
