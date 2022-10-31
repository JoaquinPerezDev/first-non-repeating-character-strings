// Write a function that takes in a string of lowercase English-alphabet letters 
// and returns the index of the string's first non-repeating character. 

// The first non-repeating character is the first character in a string that
// occurs only once. 

// If the input string doesn't have any non-repeating characters, your function 
// should return -1.

// Sample input: string = "abcdcaf"
// Sample output: 1 (The first non-repeating character is "b" and is found at index 1).

//Naive approach: We can loop through the string and add it to a hash table. If 
//the character is already in the hash table, we can increment the value. We can 
//then loop through the string again and check if the value at each index has a 
//value of 1 within the hashtable, if it does then we return that index. Otherwise, 
//we can just return -1 as the prompt suggests.


//time complexity: Given we're just looping through the string, our runtime here is 
//O(n) where n is the length of the input string.

//space complexity: Given that we know our string can only consist of the 26 
//lower-case characters in the english alphabet, our hash table will never have more
//than 26 character frequencies. For this reason, our runtime for this algorithm is 
//O(1) constant time.

//O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
  const characterFrequencies = {};

  for(const character of string) {
    if(!(character in characterFrequencies)) characterFrequencies[character] = 0;
    characterFrequencies[character]++;
  }
  for(let i = 0; i < string.length; i++) {
    const character = string[i];
    if(characterFrequencies[character] === 1) return i;
  }
  return -1;
}