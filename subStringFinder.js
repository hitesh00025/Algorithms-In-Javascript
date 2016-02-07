function subStringFinder(str,subStr){

//var patt = /+subStr+/;
var result = str.indexOf(subStr);
console.log(result)

}

console.log(subStringFinder('abbcdabbbbbck', 'bck'));

// In ES6 there are three new methods: includes(), startsWith(), endsWith().
//
// var msg = "Hello world!";
//
// console.log(msg.startsWith("Hello"));       // true
// console.log(msg.endsWith("!"));             // true
// console.log(msg.includes("o"));             // true
//
// console.log(msg.startsWith("o", 4));        // true
// console.log(msg.endsWith("o", 8));          // true
// console.log(msg.includes("o", 8));          // false
