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

export default function ParentComponent() {
  return (
    <>
      <ChildComponent person={{ name: "Mahesh Khairnar", dob: "12-12-1989" }} />
    </>
  );
}
