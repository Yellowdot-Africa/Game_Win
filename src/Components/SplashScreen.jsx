import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BgImage from "../assets/bgg.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen ">

        <img src={BgImage} alt="Background" className="absolute inset-0 object-cover w-full h-full"/>
    </div>
  );
};

export default SplashScreen;







