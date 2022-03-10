const { randomBytes, pbkdf2Sync } = require('crypto');

// Link a la documentación   https://www.npmjs.com/package/crypto-js  //


function genPassword(password) {
    const salt = randomBytes(32).toString('hex');
    const genHash = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    
    return {
      salt: salt,
      hash: genHash
    };
}

function validPassword(password, hash, salt) {
    const hashVerify = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}

module.exports = { validPassword, genPassword };