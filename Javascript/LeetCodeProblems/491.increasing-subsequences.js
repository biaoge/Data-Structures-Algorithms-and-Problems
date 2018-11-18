/*
 * [491] Increasing Subsequences
 *
 * https://leetcode.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (40.41%)
 * Total Accepted:    26K
 * Total Submissions: 64.3K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 
 * Given an integer array, your task is to find all the different possible
 * increasing subsequences of the given array, and the length of an increasing
 * subsequence should be at least 2 .
 * 
 * 
 * Example:
 * 
 * Input: [4, 6, 7, 7]
 * Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 * 
 * 
 * 
 * Note:
 * 
 * The length of the given array will not exceed 15.
 * The range of integer in the given array is [-100,100].
 * The given array may contain duplicates, and two equal integers should also
 * be considered as a special case of increasing sequence.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = {};
  let result = [];
  dfs(nums, 0, nums.length, res, []);

  Object.keys(res).forEach(key => {
    result.push(res[key]);
  });

  return result;
};

function dfs(nums, curIndex, len, res, helper) {
  if(curIndex === len) {
    if(helper.length > 1) {
      let key = '';
      helper.forEach(element => {
        key += element + '.';
      });
      res[key] = helper.slice();
    }
  } else {
    let set = new Set();
    for(let i = curIndex; i < len; i++) {
      // 可以不用显示写de-dup代码，因为res是一个object，相同的数组会对应到同一个key，overwrite之前的值；
      // 但是没有提前剪枝，降低性能  
      if(set.has(nums[curIndex])) continue;
      if(helper.length === 0 || helper[helper.length - 1] <= nums[i]) {
        set.add(nums[curIndex]);
        helper.push(nums[i]);
        dfs(nums, i + 1, len, res, helper);
        helper.pop();
      }

      // 这个要放在外面，不然先增后减的数组前面先增的部分无法取到
      dfs(nums, i + 1, len, res, helper);
    }
  }
}

var numUniqueEmails = function(emails) {
  let set = new Set();
  for(email of emails) {
      let realStr = [];
      let i = 0;
      while(i < email.length) {
          if(email.charAt(i) === '.') {
              i++;
          } else if(email.charAt(i) === '+') {
              while(i < email.length && email.charAt(i) !== '@') {
                  i++;
              }
              realStr.push(email.charAt(i++));
          } else {
              realStr.push(email.charAt(i++));
          }
      }
      set.add(realStr);
  }
  
  return set.size();
};