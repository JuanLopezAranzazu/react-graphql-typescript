import { gql } from "@apollo/client";

export const FIND_ALL_USERS = gql`
  query findAllUsers {
    findAllUsers {
      id
      name
      username
      reminders {
        id
        content
        active
      }
    }
  }
`;
