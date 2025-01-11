import "./App.css";
import Navbar from "./components/Navbar";
//import ParentComponent from "./ParentComponent";
import Form from "./components/Form";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionComponent from "./components/MyFunctionComponent";

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
