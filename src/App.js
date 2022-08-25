import logo from "./logo.svg";
import "./App.css";
import { activity, buzzword, advice, joke } from "./utils/getAPI.js";

function App() {
  console.log(joke());
  advice().then((res) => console.log(res.slip.advice));
  buzzword().then((res) => console.log(res.phrase));
  activity().then((res) => console.log(res.activity));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
