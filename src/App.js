import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [api, setApi] = useState([]);
  const [increment, setIncrement] = useState(0);
  const handleInc = () => {
    setIncrement(increment + 1);
  };
  const handelDec = () => {
    setIncrement(increment - 1);
  };

  const apicall = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setApi(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    apicall();
  }, []);
  return (
    <div className="App">
      <h1> Revision</h1>
      <button className="inc" onClick={handleInc}>
        Increment
      </button>
      {increment}
      <button className="inc" onClick={handelDec}>
        Decrement
      </button>
      {api.map((val) => (
        <li>{val.title}</li>
      ))}
    </div>
  );
}
