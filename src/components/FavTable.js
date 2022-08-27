import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "../FavTable.css";
import { Button } from "@chakra-ui/react";

export default function FavTable({ phrases, getPhrases, justName }) {
  console.log(phrases);
  async function deletePhrase(user, phraseId) {
    const obj = { name: user, id: phraseId };
    const method = "DELETE";
    const body = JSON.stringify(obj);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch("/api/delphrase", { method, headers, body }).then((res) =>
      res.json()
    );
  }

  return (
    <section className="favTable">
      <TableContainer className="listTable">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Phrase</Th>
              <Th>delete</Th>
            </Tr>
          </Thead>
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
                        onClick={() => {
                          deletePhrase(justName, obj.id);
                          getPhrases(justName);
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
                <Button colorScheme="teal" variant="solid">
                  Button
                </Button>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
}
