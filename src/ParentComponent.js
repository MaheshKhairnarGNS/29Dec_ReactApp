// import App from "./App";
// import MyFile from "./MyFile";

// export default function ParentComponent() {
//   return (
//     <>
//       <MyFile />
//       <App />
//     </>
//   );
// }

import ChildComponent from "./ChildComponent";
import Navbar from "./components/Navbar";

export default function ParentComponent() {
  return (
    <>
      <Navbar title="ParentTitle" tab="AboutParent" />
      <ChildComponent person={{ name: "Mahesh Khairnar", dob: "12-12-1989" }} />
    </>
  );
}
