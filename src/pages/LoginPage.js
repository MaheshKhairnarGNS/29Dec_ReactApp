import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserProvider";

const LoginPage = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUserDetails } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // axios({
    //     // Endpoint to send files
    //     url: "http://localhost:1337/api/students",
    //     method: "GET",
    //     headers: {
    //       // Add any auth token here
    //       authorization: "your token comes here",
    //     },

    //     // Attaching the form data
    //     data: formData,
    //   })

    axios
      .get("http://localhost:1337/api/students")
      .then((response) => {
        setStudents(response.data.data);
        console.log("Api called Successfully");
      })
      .catch((error) => {
        console.error("Error fetching Api", error);
      });

    // console.log("students : ", students);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = students.find(
      (student) => student.name === name && student.email === email
    );

    if (user) {
      setUserDetails(user);
      alert("Login Successfully..!");
      //   navigate("/dashboard");
      navigate("/dashboardscreen");
    } else {
      alert("Invalid User Credentials....!");
    }
  };

  return (
    <div>
      <h1>Login Page here</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
