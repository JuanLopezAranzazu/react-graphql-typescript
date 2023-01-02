import React, { useState } from "react";
import "./CreateUser.css";
import { useMutation } from "@apollo/client";
// mutations
import { CREATE_USER } from "./../../Graphql/Mutations";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div className="create-user">
      {error && (
        <div className="error-create-user">
          <p>{error.message}</p>
        </div>
      )}
      <form
        onSubmit={() => createUser({ variables: { name, username, password } })}
      >
        <input
          type="text"
          placeholder="Enter name..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password..."
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="CREATE USER" />
      </form>
    </div>
  );
};

export default CreateUser;
