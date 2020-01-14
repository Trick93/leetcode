#### 118-Pascal's Triangle-杨辉三角

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例**

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

#### 理解

著名的杨辉三角，简单说就是除首尾两个元素外，每个数的值等于它 **左上方** 和 **右上方** 的数的和。按照这个思路来很容易写出解答方法

---
#### 答案

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = []
    for(let i = 0; i < numRows; i++) {
        let row = []
        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                row.push(1)
            } else {
                row.push(arr[i - 1][j - 1] + arr[i-1][j])
            }
        }
        arr.push(row)
    }
    return arr
};
```

---

#### 其他

去看了下题解官方给的答案，发现只有 `c`  和 `python` 版本，于是将 `python` 版本翻译成 `javascript` 如下，结果好像也差不了多少时间。可以看下

```javascript

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = []
    for(let i = 0; i < numRows; i++) {
        let row = Array.from({length: i + 1}).fill(null)
        row[0] = 1
        row[i] = 1
        for(let j=1; j<row.length-1; j++){
            row[j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
        arr.push(row)
        
    }
    return arr
};

```
