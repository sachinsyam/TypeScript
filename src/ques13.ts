import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(str: string): boolean {
  // Convert the string to lowercase and remove any non-alphanumeric characters
  const processedStr = str.toLowerCase();


  const reversedStr = processedStr.split('').reverse().join('');

  return processedStr === reversedStr;
}

function readStringFromUser(): Promise<string> {
  return new Promise((resolve) => {
    rl.question(`Enter a string: `, (input) => {
      resolve(input);
    });
  });
}

async function main() {
  const str: string = await readStringFromUser();

  const isPalindromeResult = isPalindrome(str);

  if (isPalindromeResult) {
    console.log('Entered string is a palindrome');
  } else {
    console.log('Entered string is not a palindrome');
  }

  rl.close();
}

main();
