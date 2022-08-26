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

export default function FavTable({ phrases }) {
  console.log(phrases);
  return (
    <section className="favTable">
      <TableContainer className="listTable">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Phrase</Th>
            </Tr>
          </Thead>
          <Tbody>
            {phrases.length > 0 ? (
              phrases.map((obj, index) => {
                return (
                  <Tr key={index}>
                    <Td>{obj.id}</Td>
                    <Td>{obj.phrase}</Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td>id</Td>
                <Td>phrase</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
}
