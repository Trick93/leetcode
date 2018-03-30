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