import logo from "./img/App-logo.png";
import "./App.css";
import { activity, buzzword, advice, joke } from "./utils/getAPI.js";

function App() {
  console.log(joke());
  advice().then((res) => console.log(res.slip.advice));
  buzzword().then((res) => console.log(res.phrase));
  activity().then((res) => console.log(res.activity));
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
