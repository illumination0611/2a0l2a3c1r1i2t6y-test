import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: `${process.env.DB_URL}?sslmode=require`,
  ssl: {
    rejectUnauthorized: false,
  }
});

export const dbQuery = (text: string, params?: any[]) => pool.query(text, params);

//Export db handle functions
export { getDataByKeyId } from './retrieveData';
export { addData } from './storeData';
