module.exports = {
  token: {
    kind: 'jwt',
    options: {
      issuer: 'sojo-app',
      algorithm : 'RS256',
      secret: 'ssshhh',
         // can replace with publicKey, privateKey properties
    }
  }
};