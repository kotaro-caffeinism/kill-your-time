import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import "../Advice.css";
import { getActivity, getBuzzword, getAdvice, getJoke } from "../utils/getAPI";
import logo from "../img/like.png";

export default function Advice({ currentText, setText }) {
  function jokeOrAdviceText() {
    const num = Math.floor(Math.random() * 8);
    if (num === 3) {
      setText(getJoke());
    } else {
      getAdvice().then((res) => setText(res.slip.advice));
    }
  }

  function emptyText() {
    getBuzzword().then((res) => setText(res.phrase));
  }

  function activityText() {
    getActivity().then((res) => setText(res.activity));
  }

  function addPhrase() {}

  return (
    <>
      <section>
        {currentText.length === 0 ? (
          <h1 className="display-advice">
            The Word is what you want in your life
          </h1>
        ) : (
          <h1 className="display-advice">{currentText}</h1>
        )}
        <div>
          <Box
            className="button-box"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <ButtonGroup gap="4">
              <Button
                colorScheme="telegram"
                variant="solid"
                onClick={() => jokeOrAdviceText()}
              >
                Get An Advice
              </Button>
              <Button
                colorScheme="cyan"
                variant="ghost"
                onClick={() => emptyText()}
              >
                Get An Empty Phrase
              </Button>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => activityText()}
              >
                What Will I Do?
              </Button>
            </ButtonGroup>
          </Box>
          <img className="favorite-button" src={logo}></img>
        </div>
      </section>
    </>
  );
}
