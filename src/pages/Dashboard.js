import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const Dashboard = () => {
  const { userDetails } = useUser();

  return (
    <>
      <h1>Dashboard Page here</h1>
      <h2>Welcome {userDetails.name}</h2>
      <h2>Your Email id is : {userDetails.email}</h2>
    </>
  );
};

export default Dashboard;
