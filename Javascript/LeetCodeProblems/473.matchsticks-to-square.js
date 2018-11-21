/*
 * [473] Matchsticks to Square
 *
 * https://leetcode.com/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (35.21%)
 * Total Accepted:    19.9K
 * Total Submissions: 56.6K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * Remember the story of Little Match Girl? By now, you know exactly what
 * matchsticks the little match girl has, please find out a way you can make
 * one square by using up all those matchsticks. You should not break any
 * stick, but you can link them up, and each matchstick must be used exactly
 * one time.
 * 
 * ⁠Your input will be several matchsticks the girl has, represented with their
 * stick length. Your output will either be true or false, to represent whether
 * you could make one square using all the matchsticks the little match girl
 * has.
 * 
 * Example 1:
 * 
 * Input: [1,1,2,2,2]
 * Output: true
 * 
 * Explanation: You can form a square with length 2, one side of the square
 * came two sticks with length 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [3,3,3,3,4]
 * Output: false
 * 
 * Explanation: You cannot find a way to form a square with all the
 * matchsticks.
 * 
 * 
 * 
 * Note:
 * 
 * The length sum of the given matchsticks is in the range of 0 to 10^9.
 * The length of the given matchstick array will not exceed 15.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 * dfs solution O(4 ^ n) time complexity O(n) space complexity
 */
var makesquare = function(nums) {
    if(nums === null || nums.length  < 4) {
        return false;
    }

    let sum = 0;
    for(let num of nums) {
        sum += num;
    }

    if(sum % 4 !== 0) {
        return false;
    }

    nums.sort(function(a, b) {
        return b - a;
    })

    let sums = new Array(4).fill(0);
    
    return dfs(nums, sums, 0, sum / 4);
};

// O(4 ^ n) time complexity
function dfs(nums, sums, index, target) {
    if (index === nums.length) {
        if(sums[0] === target && sums[1] === target && sums[2] === target) {
            return true;
        }
        return false;
    }

    for(let i = 0; i < 4; i++) {
        if(sums[i] + nums[index] > target) {
            continue;
        }
        sums[i] += nums[index];
        if (dfs(nums, sums, index + 1, target)) {
            return true;
        }
        sums[i] -= nums[index];
    }

    return false;
}

