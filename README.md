# leetcode
leetcode problems with javascript

## 06-ZigZag Conversion
题意：给定一个字符串和行数,按照锯齿状竖着列，将每一横行的值拼接起来返回新的字符串

**examples**

输入 `"PAYPALISHIRING"` 转变成3行如下图：

```
P   A   H   N
A P L S I I G
Y   I   R
```

输出 `"PAHNAPLSIIGYIR"`

**解题思路**：首先按照上图“锯齿状”这样的排列顺序，根据传来的`numRows`竖着排列生成相对于的行数，可以生成包含`numRows`项的一个数组，存放每一行的数据，最后拼接起来即可。可以用个变量index来记录当前这一项应存放至数组对于的第index项

```javascript
/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
var convert = function(s, numRows) {
    let arr = Array(numRows).fill(""),
        len = s.length,
        index = 0,//标明当前应当存放在数组的第几项
        step = 1;//标明当前是累加或者累减
    if(len === 0 || numRows <= 1) return s
    for(let i=0; i<len; i++){
        arr[index] += s[i]
        if(index == 0){
            step = 1
        } else if(index == numRows - 1){//如果到达最后一行开始倒数
            step = -1
        }
        index += step
    }
    return arr.join("");
};
```