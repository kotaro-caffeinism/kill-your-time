import logo from "./img/logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import Advice from "./components/Advice";
import { FormControl, Input, Button } from "@chakra-ui/react";
import FavTable from "./components/FavTable";

function App() {
  const [currentText, setText] = useState("");
  const [username, setName] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [justName, setJustName] = useState("");

  useEffect(() => {
    getPhrases(justName);
  }, [justName]);

  async function fetchUsers(nickname) {
    const obj = { nickname };
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch("/api/users", { method, headers, body }).then((res) =>
      res.json()
    );
  }
  async function getPhrases(user) {
    await fetch(`/api/favorites/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setPhrases(data);
        console.log(phrases);
      });
  }

  async function fetchPhrase(user, phrase) {
    const obj = { name: user, phrase };
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch("/api/phrase", { method, headers, body }).then((res) =>
      res.json()
    );
  }

  return (
    <>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="input-name">
          If you have used it before, enter the same nickname
        </span>
        <FormControl className="input-form">
          <Input
            placeholder="nickname"
            className="input-holder"
            onChange={(e) => {
              if (e.nativeEvent.data === null) {
                username.pop();
                setName([...username]);
              } else {
                setName([...username, e.nativeEvent.data]);
              }
            }}
          />
          <Button
            className="signin"
            colorScheme="teal"
            type="submit"
            onClick={() => {
              const result = username.toString().replace(/,/g, "");
              console.log("name", result);
              setJustName(result);
              fetchUsers(result);
              if (justName.length === 0) {
                setPhrases([]);
              }
              console.log({ justName });
            }}
          >
            signin
          </Button>
        </FormControl>

        <Advice
          setText={setText}
          currentText={currentText}
          justName={justName}
          fetchPhrase={fetchPhrase}
          setPhrases={setPhrases}
          phrases={phrases}
          getPhrases={getPhrases}
        />
      </div>
      <div className="favDiv">
        <FavTable
          getPhrases={getPhrases}
          phrases={phrases}
          justName={justName}
        />
      </div>
    </>
  );
}

export default App;
