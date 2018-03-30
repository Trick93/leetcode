# leetcode
leetcode problems with javascript
记录下刷leetcode的一些题目，并不保证是最优解法

---

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

---

## 07-Reverse Integer

题意：给定一个32位带符号整数,将该数反转返回

**examples**

```
输入：123
输出：321
```

**解题思路**：这道题在javascript上没有什么坑,但是题目上有要求环境是一个只能持有32位整数的情况下，也就是整数范围只能在[-2^31,2^31-1]，溢出的返回0

```javascript
/**
* @param {number} x
* @return {number}
*/
var reverse = function(x) {
    let pat = String(Math.abs(x)).split("").reverse().join(""),
        num =  x < 0 ? parseInt("-"+pat) : parseInt(pat)
    return num > Math.pow(2,31) || num <= Math.pow(-2,31) ? 0 : num
};
```

---

## 08-String to Interger

题意：字符串转整形

**解题思路**：还是注意int溢出的问题

```javascript
/**
* @param {string} str
* @return {number}
*/
var myAtoi = function(str) {
    let maxInt = Math.pow(2,31)-1,
        minInt = Math.pow(-2,31),
        s = isNaN(parseInt(str))? 0 : parseInt(str);
    if(s >= maxInt) return maxInt;
    else if(s <= minInt) return minInt;
    else return s;
    
};
```

---

## 09-Palindrome Number

题意：判定一个整数是不是回文数

**解题思路**：在javascript中判断回文数其实挺方便的，主要用数组的`reverse`进行翻转，注意考虑输入为负数的情况下

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    return String(x).split("").reverse().join("") === String(x)? true : false
};
```

---

## 14-Longest Common Prefix

题意：给你一个数组，判断这个数组中最长的相同前缀

**解题思路**：假设数组`['aaabbbc','aaadg','aayrw']`，这样最大的前缀就是`aa`，我们可以取数组的第一项来，用数组的第一项去对比后面其他项，只要发现其中找不到的，就将第一项的字符串截取下，去掉最后一位，重复上次操作检测，直至整个数组对比完成为止

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    let firstStr = strs[0]
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(firstStr) == -1){
            firstStr = firstStr.substr(0,firstStr.length-i)
        }
    }
    return firstStr
};
```