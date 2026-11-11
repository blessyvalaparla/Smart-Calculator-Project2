
import { useState } from "react";
import "./App.css";
function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [type, setType] = useState("Basic");
  const [result, setResult] = useState("");

  function calculate() {
    let x = Number(a), y = Number(b), r;

    if (a === "" || b === "" || y === 0) {
      setResult("Enter valid values");
      return;
    }

    if (type === "Basic") r = x + y;
    else if (type === "Percentage") r = x / y * 100;
    else if (type === "CGPA") r = (x + y) / 2;
    else r = x / y * 100;

    setResult(r.toFixed(2));
  }

  return (
    <div className="app">
      <h2>Student Smart Calculator</h2>

      <select onChange={e => setType(e.target.value)}>
        <option>Basic</option>
        <option>Percentage</option>
        <option>CGPA</option>
        <option>Attendance</option>
      </select>

      <input type="number" placeholder="First value"
        onChange={e => setA(e.target.value)} />

      <input type="number" placeholder="Second value"
        onChange={e => setB(e.target.value)} />

      <button onClick={calculate}>Calculate</button>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
