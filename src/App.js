import "./App.css";

let Title = "Chapter 1";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="mainContainer">
        <h1>{Title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          excepturi voluptatem numquam qui molestias voluptates voluptatibus
          dolorem, exercitationem omnis fuga vero nobis rerum. Fuga, numquam
          quia! Deserunt neque ratione quam.
        </p>
      </div>
    </>
  );
}

export default App;
