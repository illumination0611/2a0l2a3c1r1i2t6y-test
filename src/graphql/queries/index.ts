//import query Types
import { retrieveDataQueryTypeDefs } from "./retrieveData/retrieveDataQueryType";

//import query Resolvers
import { retrieveDataQueryResolver } from "./retrieveData/retrieveDataQueryResolver";

export const queryTypeDefs = [
  retrieveDataQueryTypeDefs,
  //Add other query types
];

export const queryResolvers = {
  ...retrieveDataQueryResolver,
  //Add other query resolvers
};
