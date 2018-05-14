/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.sort(sortNumber)
  let res = []
  for (let k = 0; k < n.length; k++) {
    if (n[k] > 0) break;
    if (k > 0 && n[k] == n[k - 1]) continue;
    let target = 0 - n[k]
    let i = k + 1,
      j = n.length - 1
    while (i < j) {
      if (n[i] + n[j] == target) {
        res.push([n[k], n[i], n[j]])
        while (i < j && n[i] == n[i + 1]) i++
          while (i < j && n[j] == n[j - 1]) j--
            i++;
        j--;
      } else if (n[i] + n[j] < target) i++
        else j--
    }
  }
  return res
};

function sortNumber(a, b) {
  return a - b
}