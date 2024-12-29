export default function ChildComponent(props) {
  return (
    <>
      <h1>Name : {props.person.name}</h1>
      <h1>DOB : {props.person.dob}</h1>
    </>
  );
}
