import logo from "./img/logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import Advice from "./components/Advice";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import favorite from "./img/like.png";

function App() {
  const [currentText, setText] = useState("");
  const [username, setName] = useState([]);
  const justName = [];

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
        <FormControl className="input-form">
          {/* <FormLabel>nickname</FormLabel> */}
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
          <FormHelperText className="input-name">
            If you have used it before, enter the same nickname
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={() => {
                const result = username.toString().replace(/,/g, "");
                if (!justName.length) {
                  justName.pop();
                }
                justName.push(result);
                fetchUsers(result);
                console.log({ justName });
              }}
            >
              signin
            </Button>
          </FormHelperText>
        </FormControl>
        <Advice setText={setText} currentText={currentText} />
        <img
          className="favorite-button"
          src={favorite}
          onClick={() => {
            console.log({ Hey: justName[0] });
            fetchPhrase(justName[0], currentText);
          }}
        ></img>
      </div>
    </>
  );
}

export default App;
