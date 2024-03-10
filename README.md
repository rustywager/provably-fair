# Provably Fair Verification Tool

Welcome to the Rustywager's Provably Fair Verification Tool. The core of this tool is a JavaScript file named `fair.js`, which you can find [here](fair.js). Seeing as both coinflip and jackpot uses the same system for calculating results, it works for both game modes.

## How It Works

The Provably Fair system uses a combination of a secret hash, a public seed, and a winning percentage to determine the outcome of a game. This tool verifies that the game's outcome is indeed fair and has not been tampered with by comparing your inputs against the generated hash and calculated winning percentage.

## Getting Started

To use this tool, you'll need to provide:

- **Hash**: The hash of the game you wish to verify.
- **Public Seed**: The public seed of the game you wish to verify..
- **Secret**: The secret of the game you wish to verify (published after the game is completed).
- **Winning Percentage**: The ticket of the game you wish to verify.

You will replace the placeholders in the `fair.js` script with the values you wish to test.

### Step-by-Step Guide

1. **Install Node.js**: Ensure that Node.js is installed on your system to run the `fair.js` script. You can download it from [the official Node.js website](https://nodejs.org/).

2. **Prepare Your Data**: Gather the hash, public seed, secret, and winning percentage from the game you want to verify.

3. **Modify `fair.js`**:
   - Open `fair.js` in your favorite text editor.
   - Locate the following lines at the top of the file:
     ```
     const hash = "your_game_hash_here";
     const publicSeed = "your_public_seed_here";
     const secret = "your_secret_here";
     const winningPercentage = your_winning_percentage_here;
     ```
   - Replace `"your_game_hash_here"`, `"your_public_seed_here"`, `"your_secret_here"`, and `your_winning_percentage_here` with the actual values you're testing.

4. **Run the Script**:
   - Open a terminal or command prompt.
   - Navigate to the directory containing `fair.js`.
   - Run the script using Node.js by typing `node fair.js` or `npm start` and pressing Enter.

5. **Review the Results**:
   - The script will output whether the hash and the winning percentage are valid based on your inputs.

## Understanding the Output

- If both the hash and the winning percentage are valid, the game's outcome is provably fair based on the provided inputs.
- If either the hash or the winning percentage is invalid, the game's outcome may have been tampered with or the input values may be incorrect.

## Conclusion

This Provably Fair Verification Tool offers a transparent way to validate the fairness of game outcomes. By using cryptographic hashes and public seeds, it ensures that neither players nor operators can manipulate the game's outcome.