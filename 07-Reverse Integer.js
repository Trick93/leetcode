/**
* @param {number} x
* @return {number}
*/
var reverse = function(x) {
    let pat = String(Math.abs(x)).split("").reverse().join(""),
        num =  x < 0 ? parseInt("-"+pat) : parseInt(pat)
    return num > Math.pow(2,31) || num < Math.pow(-2,31) ? 0 : num
};
