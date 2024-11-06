import { gql } from "@apollo/client";

export const CREATE_MUTATION = gql`
  mutation($name: String!) {
    create(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_MUTATION = gql`
  mutation($id: ID!) {
    delete(id: $id) {
      id
      name
    }
  }
`;

export const GET_QUERY = gql`
  query {
    get {
      id
      name
    }
  }
`;
