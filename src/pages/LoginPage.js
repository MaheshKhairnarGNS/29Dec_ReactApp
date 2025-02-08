import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUserDetails } = useUser();
  const navigate = useNavigate();

  // Fetch student data
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/students")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = students.find(
      (student) => student.name === name && student.email === email
    );

    if (user) {
      setUserDetails(user);
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect after login
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
