import { getDataByKeyId } from "../../../db";
import { decrypt } from "../../../utils/encryption";

interface ArgumentType {
  id: string;
  decryptionKey: string;
}

export const retrieveDataQueryResolver = {
  retrieveData: async (parent: any, args: ArgumentType, context: any, info: any) => {
    const { id, decryptionKey } = args;

    try {
      let isWildCardKey = false;
      let key = id;
      
      if (id.includes('*')) {
        isWildCardKey = true;
        key = id.replace('%', '\\%').replace('*', '%');
      }

      const res = await getDataByKeyId(key, isWildCardKey);

      const result = res.map((res) => {
        try {
          return decrypt(res.encrypted_data, decryptionKey);
        } catch (err) {
          console.log('Invaild key, key=', id, 'Error', err);
          return null;
        }
      }).filter(value => value);

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};