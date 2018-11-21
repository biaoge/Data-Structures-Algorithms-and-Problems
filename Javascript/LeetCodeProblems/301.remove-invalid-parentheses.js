/*
 * [301] Remove Invalid Parentheses
 *
 * https://leetcode.com/problems/remove-invalid-parentheses/description/
 *
 * algorithms
 * Hard (37.16%)
 * Total Accepted:    94.3K
 * Total Submissions: 253.8K
 * Testcase Example:  '"()())()"'
 *
 * Remove the minimum number of invalid parentheses in order to make the input
 * string valid. Return all possible results.
 * 
 * Note: The input string may contain letters other than the parentheses ( and
 * ).
 * 
 * Example 1:
 * 
 * 
 * Input: "()())()"
 * Output: ["()()()", "(())()"]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "(a)())()"
 * Output: ["(a)()()", "(a())()"]
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: ")("
 * Output: [""]
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 * Not Sure the time complexity...
 * 
 * 
 * Explaination:
 * We all know how to check a string of parentheses is valid using a stack. Or even simpler use a counter.
 * The counter will increase when it is ‘(‘ and decrease when it is ‘)’. Whenever the counter is negative, we have more ‘)’ than ‘(‘ in the prefix.
 * 
 * To make the prefix valid, we need to remove a ‘)’.
 * The problem is: which one? The answer is any one in the prefix. However, if we remove any one, we will generate duplicate results, for example: s = ()), we can remove s[1] or s[2] but the result is the same (). 
 * Thus, we restrict ourself to remove the first ) in a series of concecutive )s.
 * 
 * After the removal, the prefix is then valid. We then call the function recursively to solve the rest of the string. 
 * However, we need to keep another information: the last removal position. If we do not have this position, we will generate duplicate by removing two ‘)’ in two steps only with a different order.
 * For this, we keep tracking the last removal position and only remove ‘)’ after that.
 * 
 * Now one may ask. What about ‘(‘? What if s = ‘(()(()’ in which we need remove ‘(‘?
 * The answer is: do the same from right to left.
 * However a cleverer idea is: reverse the string and reuse the code!
 * 
 */
var removeInvalidParentheses = function(s) {
    let res = [];
    dfs(s, res, 0, 0, ['(', ')']);
    return res;
};

function dfs(s, res, lastI, lastJ, parenthesis) {
    for(let stack = 0, i = lastI; i < s.length; i++) {
        if (s.charAt(i) === parenthesis[0]) stack++;
        if (s.charAt(i) === parenthesis[1]) stack--;
        if(stack >= 0) continue;

        for(let j = lastJ; j <= i; j++) {
            if(s.charAt(j) === parenthesis[1] && (j === lastJ || s.charAt(j - 1) !== parenthesis[1])) {
                dfs(s.substring(0, j) + s.substring(j + 1), res, i, j, parenthesis);
            }
        }
        return;
    }

    let reversedS = s.split("").reverse().join("");
    if (parenthesis[0] === '(') {
        dfs(reversedS, res, 0, 0, [')', '(']);
    } else {
        res.push(reversedS);
    }
}
