function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    console.log(str[i]);
    console.log(str[len -1 -i]);
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

console.log(isPalindrome('madam'));//true
console.log (isPalindrome('toyota'))//false
