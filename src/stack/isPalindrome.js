/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../linked-list/stack");

function isPalindrome(text) {
    // TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.
  
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack();
  console.log(cleanText);
  if (cleanText.length == 0){
    return false
  }
  for (let i = 0; i < cleanText.length; i++)
  {
    stack.push(cleanText.charAt(i));
  }
  let reverseString = "";
  while (!stack.isEmpty())
    {
      reverseString = reverseString+stack.pop();
    }
  console.log(reverseString);
  if (reverseString == cleanText){
    return true
  }
  



  return false;
}

module.exports = isPalindrome;
