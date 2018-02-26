/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    return String(x).split("").reverse().join("") === String(x)? true : false
};