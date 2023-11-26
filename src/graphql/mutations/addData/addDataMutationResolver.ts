import { addData } from "../../../db";
import { encrypt } from "../../../utils/encryption";

interface ArgumentType {
  id: string;
  encryptionKey: string;
  value: string;
}

export const addDataMutationResolver = {
  storeData: async (parent: any, args: ArgumentType, context: any, info: any) => {
    const { id, encryptionKey, value } = args;

    try {
      const encryptedData = encrypt(value, encryptionKey);
      await addData(id, encryptedData);

      return 'Data stored successfully';
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
