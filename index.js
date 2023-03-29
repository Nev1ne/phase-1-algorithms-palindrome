function isPalindrome(word) {
  // Write your algorithm here
  const reversedStr = word.toLowerCase().split("").reverse().join("");
  if (reversedStr === word) return true;
  return false;
}

/* 
  Add your pseudocode here
*/
-reverse string
if reversed is equal to word
   return true
else 
   return false
/*
  Add written explanation of your solution here
*/
-convert to lowercase
  -reverse the string
  -check if it is equal to the string

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
