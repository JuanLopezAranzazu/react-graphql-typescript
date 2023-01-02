import React from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// components
import CreateUser from "./Components/CreateUser/CreateUser";
import ListOfUsers from "./Components/ListOfUsers/ListOfUsers";

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <CreateUser />
        <ListOfUsers />
      </div>
    </ApolloProvider>
  );
};

export default App;
