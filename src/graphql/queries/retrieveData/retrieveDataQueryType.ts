import { gql } from 'apollo-server-express';

export const retrieveDataQueryTypeDefs = gql`
  type Query {
    retrieveData (id: String!, decryptionKey: String!): [String]
  }
`;
