import React, { createContext, useContext, useState, useEffect } from "react";
import { checkSubscriptionStatus } from "../api/subscriptionApi";

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [msisdn, setMsisdn] = useState(null);

  useEffect(() => {
    const savedMsisdn = localStorage.getItem("msisdn");
    if (savedMsisdn) {
      setMsisdn(savedMsisdn);
    }
    setIsLoading(false);
  }, []);

  const fetchSubscriptionStatus = async (msisdn, serviceId) => {
    setIsLoading(true);
    try {
      const response = await checkSubscriptionStatus(msisdn, serviceId);
      const status = response.data;
      setSubscriptionStatus(status);
      setMsisdn(msisdn);
      localStorage.setItem("msisdn", msisdn);
      setError(null);
      return status;
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SubscriptionContext.Provider
      value={{
        msisdn,
        setMsisdn,
        subscriptionStatus,
        fetchSubscriptionStatus,
        isLoading,
        error,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionContext;
