import "./App.css";
import Counter from "./Counter";
import Team from "./Team";

function App() {
  function handleClick() {
    alert("Button clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };
  const handleAddFive = (num) => {
    alert("The output is: " + (num + 5));
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Team/>
      <Counter/>
      {/* With normal function */}
      <button onClick={handleClick}>Click me</button>
      {/* with arrow function */}
      <button onClick={handleClick2}>Click me 2</button>
      {/* with inline function */}
      <button onClick={() => {alert("Third button clicked");}}>Click me 3</button>
      {/* event handler with params */}
      <button onClick={() => handleAddFive(3)}>Add 5</button>
    </>
  );
}

export default App;
