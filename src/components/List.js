import { Tbody, Tr, Td } from "@chakra-ui/react";
import "../FavTable.css";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";

export default function List({ phrases, getPhrases, justName, deletePhrase }) {
  useEffect(() => {
    getPhrases(justName);
    // console.log("List", phrases);
  });

  return (
    <Tbody>
      {phrases.length > 0 ? (
        phrases.map((obj, index) => {
          return (
            <Tr key={index}>
              <Td>{obj.id}</Td>
              <Td>{obj.phrase}</Td>
              <Td>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={async () => {
                    await deletePhrase(justName, obj.id);
                    await getPhrases(justName);
                  }}
                >
                  delete
                </Button>
              </Td>
            </Tr>
          );
        })
      ) : (
        <Tr>
          <Td>id</Td>
          <Td>phrase</Td>
          <Td>
            <Button colorScheme="teal" variant="solid">
              Button
            </Button>
          </Td>
        </Tr>
      )}
    </Tbody>
  );
}
