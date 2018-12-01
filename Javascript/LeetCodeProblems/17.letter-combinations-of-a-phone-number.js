/*
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (39.03%)
 * Total Accepted:    307.8K
 * Total Submissions: 788.6K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 * 经典dfs递归题
 * O(4^n) time, O(n) space
 */
var letterCombinations = function(digits) {
    let res = [];
    if (digits === null || digits.length === 0) {
        return res;
    }

    let map = new Map();
    map.set('2', ['a','b','c']);
    map.set('3', ['d','e','f']);
    map.set('4', ['g','h','i']);
    map.set('5', ['j','k','l']);
    map.set('6', ['m','n','o']);
    map.set('7', ['p','q','r','s']);
    map.set('8', ['t','u','v']);
    map.set('9', ['w','x','y','z']);

    dfs(digits, 0, map, res, []);
    return res;
};

function dfs(digits, index, map, res, chars) {
    if (index === digits.length) {
        let str = chars.join('');
        res.push(str);
        return;
    }
    
    let digitChars = map.get(digits.charAt(index))
    for(let j = 0; j < digitChars.length; j++) {
        chars.push(digitChars[j]);
        dfs(digits, index + 1, map, res, chars);
        chars.pop();
    }
}
