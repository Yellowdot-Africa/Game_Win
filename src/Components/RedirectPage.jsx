import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import ProfileContext from "../Context/ProfileContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import NotificationModal from "../Components/Modals/NotificationModal";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {loading ? (
        <div className="flex flex-col items-center">
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size="3x"
            className="text-purple-700"
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






// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const RedirectPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Function to validate and decode Base64
//   const decodeBase64 = (str) => {
//     try {
//       const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/; // Valid Base64 regex
//       if (!base64Regex.test(str)) {
//         throw new Error("Invalid Base64 string");
//       }
//       return atob(str); // Decode Base64
//     } catch (error) {
//       throw new Error("Decoding failed: " + error.message);
//     }
//   };

//   // Function to check subscription
//   const checkSubscription = async (msisdn, serviceId) => {
//     try {
//       const response = await axios.post(
//         "https://be-spin-mtn.ydafrica.com/api/v1/checkstatus",
//         { msisdn, serviceId },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.data.data.State === "Active") {
//         localStorage.setItem("isSubscribed", "true");
//         localStorage.setItem("lastBillingDate", response.data.data.LastBillingDate);
//         localStorage.setItem("subscriptionDate", response.data.data.SubscriptionDate);
//         navigate("/"); // Navigate to home page
//       } else {
//         setErrorMessage("Your subscription is inactive. Please subscribe to continue.");
//         localStorage.setItem("isSubscribed", "false");
//         window.location.href = "https://play.mtn.co.za/subscribe/service/10421?gv_id=4539";
//       }
//     } catch (error) {
//       setErrorMessage("Error checking subscription. Please try again.");
//       console.error("Subscription check error:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Effect to handle redirection logic
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const cli = queryParams.get("cli");
//     const sid = queryParams.get("sid");

//     if (cli && sid) {
//       console.log("Raw CLI from URL:", cli);
//       try {
//         const decodedCli = decodeBase64(cli); // Validate and decode
//         console.log("Decoded CLI:", decodedCli);
//         localStorage.setItem("cli", decodedCli);
//         localStorage.setItem("sid", sid);
//         checkSubscription(decodedCli, sid); // Check subscription
//       } catch (error) {
//         console.error("Invalid CLI parameter:", cli, error.message);
//         setErrorMessage("Invalid link provided. Please try again.");
//         setLoading(false);
//       }
//     } else {
//       console.error("Missing CLI or SID parameters in URL.");
//       setErrorMessage("Invalid link provided. Please try again.");
//       setLoading(false);
//     }
//   }, [location.search]);

//   // UI Rendering
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       {loading ? (
//         <div className="flex flex-col items-center">
//           <h1 className="text-xl font-semibold text-purple-700">Redirecting...</h1>
//         </div>
//       ) : (
//         <div className="text-center">
//           {errorMessage ? (
//             <p className="text-red-500">{errorMessage}</p>
//           ) : (
//             <p className="text-gray-700">Please wait while we redirect you.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RedirectPage;
