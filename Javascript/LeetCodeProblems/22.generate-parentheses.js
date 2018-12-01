/*
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (51.38%)
 * Total Accepted:    268.8K
 * Total Submissions: 523.1K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 * O(2^2n) time, 经典dfs
 */
var generateParenthesis = function(n) {
    let res = [];
    let pars = ['(', ')'];
    dfs(0, 0, n, [], res, pars);
    return res;
};

function dfs(left, right, n, curPar, res, pars) {
    if (left === n && right === n) {
        let parStr = curPar.join('');
        res.push(parStr);
        return;
    }

    if (left < n) {
        curPar.push(pars[0]);
        dfs(left + 1, right, n, curPar, res, pars);
        curPar.pop();
    } 
    if (right < left) {
        curPar.push(pars[1]);
        dfs(left, right + 1, n, curPar, res, pars);
        curPar.pop();
    }
}
