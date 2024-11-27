import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SplashScreen from './Components/SplashScreen'
import MainScreen from './Pages/MainScreen';
import LeaderBoard from './Pages/LeaderBoard';
import Profile from "./Pages/Profile";
import GamePage from "./Pages/GamePage";
import LoginPage from './Pages/LoginPage';
import SubscriptionPage from './Pages/SubscriptionPage';
import TnCPage from './Pages/TnCPage';
import FAQ from './Pages/FAQ';
import './App.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/home",
    element: <MainScreen />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
  {
    path: "/user-profile",
    element: <Profile />,
  },
  {
    path: "/terms-and-conditions",
    element: <TnCPage />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/subscribe",
    element: <SubscriptionPage />,
  },

  {
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
]);

const App = ()=> {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App