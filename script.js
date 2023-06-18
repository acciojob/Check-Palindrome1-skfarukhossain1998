// complete the given function
function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversed = s.split('').reverse().join('');

  // Compare the original string with the reversed string
  return s === reversed;
}

// Example usage
const inputString = "race a car";
console.log(isPalindrome(inputString));

module.exports = isPalindrome
