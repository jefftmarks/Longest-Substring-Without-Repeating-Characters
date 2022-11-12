function lengthOfLongestSubstring(s) {
	let longest = "";

  for (let i = 0; i < s.length; i++) {
		let sub = s[i]
		for (let j = i + 1; !sub.includes(s[j]) && j < s.length; j++) {
			sub = sub + s[j];
		}
		longest = sub.length > longest.length ? sub : longest;
	}

	console.log(longest);
	return longest.length;
}

if (require.main === module) {

	console.log(lengthOfLongestSubstring(""));

// add your own tests in here
// console.log("Expecting: 3");
// console.log("=>", lengthOfLongestSubstring("abcabcbb"));

}

module.exports = lengthOfLongestSubstring

// Please add your pseudocode to this file
// And a written explanation of your solution
/**
 * Initialize longest variable
 * For loop through string
 * In each loop run additional for loop:
 *	Each time check if character already included in substring
 * 	build out substring until duplicate hit
 * 	if string is longer than longest variable, update
 */