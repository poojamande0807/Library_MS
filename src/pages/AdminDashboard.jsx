import {
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import PieChart from "./PieChart";
import { database } from "../database/db";
import { useDispatch, useSelector } from "react-redux";
import AvalibilityBooksChart from "./AvalibilityBooksChart";

const AdminDashboard = () => {
  //   const books = database.books;
  const users = useSelector((state) => state.user.users);
  const books = useSelector((state) => state.books.books);
  console.log(users, "books");
  //   const borrowedBooks = useSelector((state) => state.books.borrowedBooks);
  const dispatch = useDispatch();

  const handleBan = (userId) => {
    dispatch(banUser(userId));
  };

  return (
    <div className="main-div">
      <div className="genre-table">
        <h2>Users</h2>
        <ul></ul>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Borrowed Books</Th>

                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map((user) => {
                  return (
                    <Tr>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.borrowedBooks}</Td>
                      <Td>
                        <Button colorScheme="red">BAN USER</Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="genre-pie">
        <AvalibilityBooksChart
          availableBooksData={[{ availble: "25%" }, { borrowed: "75%" }]}
        />{" "}
        <PieChart data={books} />
      </div>
    </div>
  );
};

export default AdminDashboard;
