import { Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";
import "../FavTable.css";
// import { Button } from "@chakra-ui/react";
import List from "./List";

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
          <List
            phrases={phrases}
            getPhrases={getPhrases}
            justName={justName}
            deletePhrase={deletePhrase}
          />
        </Table>
      </TableContainer>
    </section>
  );
}
