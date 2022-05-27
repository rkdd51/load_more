import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ApiOnButtonClick() {
  const [api, setApi] = useState([]);
  const [next, setNext] = useState(1);
  const [visible, setVisible] = useState(3);
  const apicall = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setApi(res.data);
      console.log(res.data);
    });
  };

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  const nextButton = () => {
    setNext((api) => api);
  };
  // useEffect(() => {
  //   apicall();
  // }, []);
  return (
    <div className="App">
      <h1> Revision</h1>
      <button onClick={apicall}>Click to load</button>
      {api.slice(0, visible).map((val, i) => (
        <li key={i}>{val.title}</li>
      ))}
      <br />
      <br />
      <button onClick={nextButton}>Next</button>
      {api.slice(visible, next).map((val, i) => (
        <li key={i}>{val.title}</li>
      ))}
      <hr />
      {next}
      <br />
      <br />
      <hr />
      <button onClick={showMore}>Load more</button>
    </div>
  );
}
