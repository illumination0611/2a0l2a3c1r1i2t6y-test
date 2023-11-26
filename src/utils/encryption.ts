import crypto from 'crypto';

export const encrypt = (data: string, key: string): string => {
    const hash = crypto.createHash('sha256');
    hash.update(key);
    const hashedKey = hash.digest();

    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(hashedKey), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decrypt = (encryptedData: string, key: string): string => {
    const textParts = encryptedData.split(':');
    const iv = Buffer.from(textParts.shift()!, 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');

    const hash = crypto.createHash('sha256');
    hash.update(key);
    const hashedKey = hash.digest();

    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(hashedKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    
    return decrypted.toString();
};
