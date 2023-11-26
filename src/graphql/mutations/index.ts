//import mutation Types
import { addDataMutationTypeDefs } from "./addData/addDataMutationType";

//import muation Resolvers
import { addDataMutationResolver } from "./addData/addDataMutationResolver";

export const mutationTypeDefs = [
  addDataMutationTypeDefs,
  //Add other mutation types
];

export const mutationResolvers = {
  ...addDataMutationResolver,
  //Add other mutation resolvers
}