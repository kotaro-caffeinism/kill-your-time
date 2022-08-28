import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import "../Advice.css";
import { getActivity, getBuzzword, getAdvice, getJoke } from "../utils/getAPI";
// import { TwitterShareButton } from "react-share";
import { FaTwitter } from "react-icons/fa";

export default function Advice({
  currentText,
  setText,
  justName,
  fetchPhrase,
  getPhrases,
}) {
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
            <ButtonGroup>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => jokeOrAdviceText()}
              >
                Get An Advice
              </Button>
              <Button
                colorScheme="blackAlpha"
                variant="solid"
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
          <Button
            colorScheme="whiteAlpha"
            variant="solid"
            onClick={async () => {
              console.log({ Hey: justName, currentText });
              if (currentText.length > 0) {
                await fetchPhrase(justName, currentText);
                await getPhrases(justName);
              }
            }}
            className="favorite-button"
          >
            ➕💖
          </Button>
          <a
            href={`http://twitter.com/share?url=localhost:3000&text="${currentText}"&hashtags=killyourtime`}
            class="twitter-share-button"
            data-text={currentText}
            data-hashtags="killyourtime"
            data-show-count="false"
          >
            Tweet
          </a>
        </div>
      </section>
    </>
  );
}
