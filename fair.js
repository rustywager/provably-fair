import crypto from 'crypto';

// Replace the following values with the ones you want to test
const hash = "9555b43f10973a1803fddef1e6495994a8040b738f89867f8bc826ba9979b028";
const publicSeed = "674b35c58fea822b3ea195fe1891bcfd";
const secret = "8d2a3dc171144e106abf94b21e514bf123d8f0489a440cbf0b5a7cae934032b3";
const winningPercentage = 9.4048256;

const testHash = crypto.createHash('sha256').update(secret + '-' + publicSeed).digest('hex');

const testWinningPercentage = (parseInt(secret.slice(0,16), 16) % 100_000_000_000) / 1_000_000_000;

const results = {
    hash: testHash === hash,
    winningPercentage: testWinningPercentage === parseFloat(winningPercentage)
}

if (results.hash)
    console.log('Hash is valid');
else
    console.log('Hash is invalid');

if (results.winningPercentage)
    console.log('Winning percentage is valid');
else
    console.log('Winning percentage is invalid');