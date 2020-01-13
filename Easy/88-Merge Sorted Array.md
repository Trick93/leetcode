## 88-Merge Sorted Array-合并两个有序数组

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

**示例**

```
输入：

nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出：[1,2,2,3,5,6]
```

---

#### 理解

这道题比较容易，就是将给定两个数组合并之后进行排序，要注意 `m` 和 `n` 来初始化数组。但是在做这个题目时候碰到了一些问题，刚开始是这样写的

```javascript
var merge = function(nums1, m, nums2, n) {
    nums1 = [...nums1.slice(0, m), ...nums2.slice(0, n)]
    nums1.sort()
    console.log(nums1)
};
```

这段代码在控制台输出是没有问题的，但是在 `leetcode` 执行的时候输出的是 `nums1` 的数组，百思不得其解。后来注意到题目 `@return {void} Do not return anything, modify nums1 in-place instead.` 意思是该函数不要返回任何东西，直接修改 `nums1` 的结果就行。

于是猜想，可能是由于 `leetcode` 是直接取 `nums1` 的内存地址去判断的，因此当重新赋值的方式是没用的，内存地址不变还是取得原来的值。因此改用直接修改 `nums1` 数组的值方式来实现，最终通过。答案如下。

---

#### 答案

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m ,...nums2.slice(0, n))
    nums1.sort((a, b) => { return a - b })
};
```