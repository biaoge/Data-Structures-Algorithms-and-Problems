/*
 * [974] Reorder Log Files
 *
 * https://leetcode.com/problems/reorder-log-files/description/
 *
 * algorithms
 * Easy (55.61%)
 * Total Accepted:    4.7K
 * Total Submissions: 8.4K
 * Testcase Example:  '["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]'
 *
 * You have an array of logs.  Each log is a space delimited string of words.
 * 
 * For each log, the first word in each log is an alphanumeric identifier.
 * Then, either:
 * 
 * 
 * Each word after the identifier will consist only of lowercase letters,
 * or;
 * Each word after the identifier will consist only of digits.
 * 
 * 
 * We will call these two varieties of logs letter-logs and digit-logs.  It is
 * guaranteed that each log has at least one word after its identifier.
 * 
 * Reorder the logs so that all of the letter-logs come before any digit-log.
 * The letter-logs are ordered lexicographically ignoring identifier, with the
 * identifier used in case of ties.  The digit-logs should be put in their
 * original order.
 * 
 * Return the final order of the logs.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4
 * 7"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 0 <= logs.length <= 100
 * 3 <= logs[i].length <= 100
 * logs[i] is guaranteed to have an identifier, and a word after the
 * identifier.
 * 
 * 
 */
/**
 * @param {string[]} logs
 * @return {string[]}
 * 处理string非常繁琐。。。
 */
var reorderLogFiles = function(logs) {
    let copyLogs = [...logs];
    let letterLogs = [], digitLogs = [];
    for(logs of copyLogs) {
        let strs = logs.split(' ');
        if(isNaN(parseInt(strs[1], 10))) {
            letterLogs.push(logs);
        } else {
            digitLogs.push(logs);
        }
    }
    
    letterLogs.sort(function(e1, e2) {
        let strs1 = e1.split(' ');
        let strs2 = e2.split(' ');

        for(let i = 1; i < strs1.length; i++) {
            if(strs1[i] < strs2[i]) {
                return -1;
            } else if(strs1[i] > strs2[i]) {
                return 1;
            }
        }
        return 0;
    });

    return [...letterLogs, ...digitLogs];
};
