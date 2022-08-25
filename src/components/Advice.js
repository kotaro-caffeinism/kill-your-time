import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import "../Advice.css";
import { getActivity, getBuzzword, getAdvice, getJoke } from "../utils/getAPI";

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
                colorScheme="teal"
                variant="solid"
                onClick={() => emptyText()}
              >
                Get An Empty Phrase
              </Button>
            </ButtonGroup>
          </Box>
        </div>
      </section>
    </>
  );
}
