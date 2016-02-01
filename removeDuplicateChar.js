
function removeDuplicateChar(str){
  var len = str.length,
      char,
      charCount = {},
      newStr = [];

  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
      console.log(charCount);

      console.log(charCount);
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    //console.log("ee"+charCount);

    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}

console.log(removeDuplicateChar('Learn more javascript dude')); //"Lnmojvsciptu"
