import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function FavTable({ justName, getPhrases, phrases }) {
  //   if (justName.length > 0) {
  //     getPhrases(justName);
  //   }

  console.log(phrases);
  return (
    <TableContainer>
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
  );
}
