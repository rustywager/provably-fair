import crypto from 'crypto';

const hash = "";
const publicSeed = "";
const secret = "";
const winningPercentage = "";

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