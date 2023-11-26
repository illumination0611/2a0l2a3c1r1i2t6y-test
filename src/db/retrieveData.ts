import { dbQuery } from ".";

export const getDataByKeyId = async (keyId: string, isWildCardKey: boolean) => {
  let queryText = '';
  if (isWildCardKey) {
    queryText = `SELECT * FROM public.alacrity_store WHERE key_id LIKE $1`;
  } else {
    queryText = `SELECT * FROM public.alacrity_store WHERE key_id = $1`;
  }

  const values = [keyId];

  try {
    const res = await dbQuery(queryText, values);
    return res.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
