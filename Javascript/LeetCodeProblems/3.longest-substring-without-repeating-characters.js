/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (25.34%)
 * Total Accepted:    645.9K
 * Total Submissions: 2.5M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let slow = 0, fast = 0;
    let map = new Map();
    let res = 0;
    while(fast < s.length) {
        if(!map.has(s.charAt(fast)) || map.get(s.charAt(fast)) === 0) {
            map.set(s.charAt(fast), 1);
            fast++;
            res = Math.max(fast - slow, res);
        } else {
            while(map.get(s.charAt(fast)) !== 0) {
                let num = map.get(s.charAt(slow));
                map.set(s.charAt(slow), num - 1);
                slow++;
            }
        }
    }

    return res;
};
