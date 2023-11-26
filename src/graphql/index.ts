import { ApolloServer } from "apollo-server-express";
import { queryTypeDefs, queryResolvers } from "./queries";
import { mutationTypeDefs, mutationResolvers } from "./mutations";

const typeDefs = [...queryTypeDefs, ...mutationTypeDefs];
const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};

export const graqhQLSever = new ApolloServer({
  typeDefs,
  resolvers,
});
