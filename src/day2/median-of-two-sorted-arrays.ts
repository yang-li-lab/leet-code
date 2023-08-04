/**
 * 寻找两个有序数组的中位数
 * 链接:https://leetcode-cn.com/problems/find-median-from-data-stream
 */
const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const nums = [...nums1, ...nums2];
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0) {
    return (nums[mid] + nums[mid - 1]) / 2;
  } else {
    return nums[mid];
  }
}

// 测试
console.log(findMedianSortedArrays([1, 3], [2]));