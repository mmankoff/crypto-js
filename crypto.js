const crypto = require('crypto');

console.log(crypto.getHashes());
console.log(crypto.getCiphers());

crypto.randomBytes(16, (err, buf) => {
   //console.log(buf.toString('hex' ));
});

let iv = crypto.randomBytes(16);

 let hash = crypto
    //.createHash('md5')
   // .createHash('sha1')
    .createHash('sha256')
    .update('your message')
    .digest('hex');

console.log(hash);

let secret_message = ':)';
let key = '12345678123456781234567812345678';


let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update(secret_message, "utf8", "hex")
encrypted += cipher.final('hex');

console.log( 'encrypted: ' + encrypted)

//aes 256-bit cipher block chaining (cbc) encryption/decryption
let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf-8");

console.log( 'decrypted: ' + decrypted)
