/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var prefix = strs[0];
    var newArray=strs[0]?strs[0].split(''):[];
    var result;
    var pushResult=[];

    for( var i=1; i<strs.length; i++)
    {
        var b = strs[i].split('');
         for( var j=0; j< b.length; j++) {
             if(newArray[j]===b[j]){
                 result=result?result+b[j]:b[j];
             }

    }
      if(result)
      {
      pushResult.push(result);
      }
      result=undefined;
    }
    if(pushResult.length ===1){
        return pushResult[0];
    }
    return longestCommonPrefix(pushResult);

};




var data =['flower', 'flow', 'hello', 'floet','flods']
console.log(longestCommonPrefix(data));
