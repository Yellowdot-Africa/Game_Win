import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import HomePage from "./Pages/HomePage";
import LeaderboardPage from "./Pages/LeaderboardPage";
import UserProfile from "./Pages/UserProfile";
import Prizes from "./Pages/Prizes";
import GamePage from "./Pages/GamePage";
import TnCPage from './Pages/TnCPage';
import FAQ from './Pages/FAQ.jsx';
import RedirectPage from './Pages/RedirectPage';
import SubscriptionPage from './Pages/SubscriptionPage';

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/redirect",
    element: <RedirectPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/game-play",
    element: <GamePage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderboardPage />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/prizes",
    element: <Prizes />,
  },
 {
path: "subscribe",
element: <SubscriptionPage/>,
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
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

