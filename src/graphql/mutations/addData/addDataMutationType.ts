import { gql } from "apollo-server-express";

export const addDataMutationTypeDefs = gql`
  type Mutation {
    storeData (id: String!, encryptionKey: String!, value: String!): String
  }
`;