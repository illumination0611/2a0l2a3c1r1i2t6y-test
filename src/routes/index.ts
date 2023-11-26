import express from 'express';
import { graqhQLSever } from '../graphql';
const router= express();

graqhQLSever.applyMiddleware({ app: router, path: '/graphql' });
//Add other routes like another graphql server or Restful Apis

export default router;