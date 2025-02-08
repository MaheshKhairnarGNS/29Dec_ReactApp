import "./App.css";
import Navbar from "./components/Navbar";
//import ParentComponent from "./ParentComponent";
import Form from "./components/Form";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionComponent from "./components/MyFunctionComponent";
import A from "./components/A";

function App() {
  return (
    <>
      {/* <Navbar title="ReactDemo" tab="Home"/> */}
      {/* <Navbar title={3} tab={3} /> */}
      {/* <Navbar title="ReactDemo" tab="Home" /> */}

      <Navbar title="ReactDemo" tab="Home" />
      <Form formTitle="Your Comment" lable1="User Id" />
      <MyClassComponent />
      <MyFunctionComponent />

      {/* <ParentComponent /> */}
    </>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider } from "./context/UserProvider";
// import LoginPage from "./pages/LoginPage";
// import Dashboard from "./pages/Dashboard";

// const App = () => {
//   return (
//     <UserProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </Router>
//     </UserProvider>
//   );
// };

// export default App;
