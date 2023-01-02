import React from "react";
import "./ListOfUsers.css";
import { useQuery } from "@apollo/client";
// queries
import { FIND_ALL_USERS } from "./../../Graphql/Queries";

const ListOfUsers = () => {
  const { data } = useQuery(FIND_ALL_USERS);

  return (
    <div className="list-users">
      <h2>List of users</h2>
      {data &&
        data.findAllUsers.map((item: any) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </div>
  );
};

export default ListOfUsers;
