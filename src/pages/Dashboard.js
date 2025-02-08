import { useUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { userDetails } = useUser();
  const navigate = useNavigate();

  if (!userDetails) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {userDetails.name}!
        </h2>
        <p>Email: {userDetails.email}</p>
        <p>Document ID: {userDetails.documentId}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-red-500 text-white p-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
