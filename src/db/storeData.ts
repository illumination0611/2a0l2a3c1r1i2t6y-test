import { dbQuery } from ".";

export const addData = async (keyId: string, encryptedData: string) => {
  const queryText = `
    INSERT INTO public.alacrity_store(key_id, encrypted_data) 
    VALUES($1, $2) 
    ON CONFLICT (key_id) 
    DO UPDATE SET encrypted_data = EXCLUDED.encrypted_data 
    RETURNING *
  `;

  const values = [keyId, encryptedData];

  try {
    const res = await dbQuery(queryText, values);
    return res.rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
}
