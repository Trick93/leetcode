/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
var convert = function(s, numRows) {
    let arr = Array(numRows).fill(""),
        len = s.length,
        index = 0,
        step = 1;
    if(len === 0 || numRows <= 1) return s
    for(let i=0; i<len; i++){
        arr[index] += s[i]
        if(index == 0){
            step = 1
        } else if(index == numRows - 1){
            step = -1
        }
        index += step
    }
    return arr.join("");
};

