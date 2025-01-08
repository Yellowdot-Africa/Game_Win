export const checkSubscriptionStatus = async (msisdn, serviceId) => {
    try {
      const response = await axios.post(
        "https://be-spin-mtn.ydafrica.com/api/v1/checkstatus",
        { msisdn, serviceId },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.data.State === "Active") {
        localStorage.setItem("isSubscribed", "true");

        localStorage.setItem("lastBillingDate", response.data.data.LastBillingDate);
        localStorage.setItem("subscriptionDate", response.data.data.SubscriptionDate);
      
        navigate("/");
      } else {
        localStorage.setItem("isSubscribed", "false");

        setErrorMessage(
          "Your subscription is inactive. Please subscribe to continue."
        );
        // window.location.href =
        //   "https://play.mtn.co.za/subscribe/service/10421?gv_id=4539";
      }
    } catch (error) {
      if (
        error.response?.status === 400 &&
        error.response?.data?.msg === "User is not active in this service"
      ) {
        setErrorMessage(
          "Your subscription is inactive. Please subscribe to continue."
        );
        window.location.href =
          "https://play.mtn.co.za/subscribe/service/10421?gv_id=4539";
      } else {
        const errorMsg =
          error.response?.data?.msg ||
          "There was an error checking your subscription status.";
        console.error("Error checking subscription status:", errorMsg);
        setErrorMessage(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };