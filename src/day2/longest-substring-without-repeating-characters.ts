// /**
//  * 无重复字符的最长子串
//  * 链接:https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
//  */
const lengthOfLongestSubstring = (s: string): number => {
  const map = {};
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    max = Math.max(max, i - start + 1);
    map[s[i]] = i;
  }
  return max;
};

// 测试
// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(1);
