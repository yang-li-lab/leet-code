/**
 * z 字形转换算法
 * 链接:https://leetcode-cn.com/problems/zigzag-conversion/
 */
const zigzagConversion = (s: string, numRows: number): string => {
  const matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
  }
  let direction = 1;
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    matrix[index].push(s[i]);
    if (index === 0) {
      direction = 1;
    } else if (index === numRows - 1) {
      direction = -1;
    } else {
      direction *= -1;
    }
    index += direction;
  }
  return matrix.map((row) => row.join('')).join('\n');
}

console.log(zigzagConversion('PAYPALISHIRING', 3));
