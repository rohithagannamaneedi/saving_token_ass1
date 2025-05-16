const jwt = require('jsonwebtoken');

// Secret key for JWT signing and encryption
const SECRET_KEY = 'your-secret-key-here';

const encrypt = (payload) => {
  try {
    // Sign the JWT token with the payload and secret key
    const token = jwt.sign(payload, SECRET_KEY, { 
      expiresIn: '1h' // Token expires in 1 hour
    });
    return token;
  } catch (error) {
    throw new Error('Error encrypting payload: ' + error.message);
  }
}

const decrypt = (token) => {
  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    throw new Error('Error decrypting token: ' + error.message);
  }
}

// Test the implementation
const testPayload = {
  userId: 123,
  username: 'testuser',
  role: 'admin'
};

try {
  // Test encryption
  const token = encrypt(testPayload);
  console.log('Encrypted Token:', token);

  // Test decryption
  const decrypted = decrypt(token);
  console.log('Decrypted Payload:', decrypted);

  // Verify if the decrypted payload matches the original
  console.log('Success');
} catch (error) {
  console.error('Test failed:', error.message);
}

module.exports = {
  encrypt,
  decrypt
}