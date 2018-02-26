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