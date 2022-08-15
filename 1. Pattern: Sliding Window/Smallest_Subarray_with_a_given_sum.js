/*
Smallest Subarray with a given sum
Given an array of positive integers nums and a positive integer target,
return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr]
of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

let minSubArrayLen = function (target, nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let leftIndex = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // console.log(sum);
    while (sum >= target) {
      result = Math.min(result, i - leftIndex + 1);
      sum -= nums[leftIndex++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};

const result = minSubArrayLen(4, [1, 1, 1, 1, 2]);
console.log(result);
