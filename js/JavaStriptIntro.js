
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.join('');
    }
    if(Array.isArray(result)){
        result = result.join('');
    }

    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    ;
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

function maxOfThree(a, b, c) {
    let result=a;
    if(b > result) result = b;
    if(c > result) result = c;
    return result;

}
console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, function () {
    return maxOfThree(20, 10, 30);
}));

function isVowel(c) {
    if(c == "a" || c=="e" || c=="i" || c=="o" || c=="u" || c == "A" || c=="E" || c=="I" || c=="O" || c=="U"){
        return true;
    }
    else
        return false;
}
console.log("Expected output of isVowel(A) is true  " + myFunctionTest(true, function () {
    return isVowel("A");
}));
console.log("Expected output of isVowel(B) is false  " + myFunctionTest(false, function () {
    return isVowel("B");
}));

function sum(arr) {
    let total=0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

function multiply(arr) {
    let total=1;
    for(let i=0; i<arr.length; i++){
        total*=arr[i];
    }
    return total;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

function reverse(str){
    let result="";
    for(let i=str.length; i>=0; i--){
        result+= str.charAt(i);
    }
    return result;
}
console.log("Expected output of reverse(\"jag testar\") is \"ratset gaj\"  " + myFunctionTest("ratset gaj", function () {
    return reverse("jag testar");
}));

function findLongestWord(arr){
    let result=arr[0].length;
    for(let i=1; i<arr.length; i++){
        if(arr[i].length>result)
            result = arr[i].length;
    }
    return result;
}
console.log("Expected output of findLongestWord(['Hello','How', 'Are', 'Holiday']) is 7  " + myFunctionTest(7, function () {
    return findLongestWord(['Hello','How', 'Are', 'Holiday']);
}));

function filterLongWords(arr, i) {
    let result=[];
    for(let r=0; r<arr.length; r++){
        if(arr[r].length > i)
            result.push(arr[r]);
    }
    return result;
}
console.log("Expected output of filterLongWords(['Hello','How', 'Are', 'Holiday'], 4) is Hello,Holiday  " + myFunctionTest(["Hello","Holiday"], function () {
    return filterLongWords(['Hello','How', 'Are', 'Holiday'],4);
}));

let arr = [1,3,5,3,3];
function a_myMap(arr) {
    let b = arr.map(function(elem, i, array) {
        return elem + 3;
    })
    return b;
}
console.log("Expected output of a_myMap() is [4,6,8,6,6]  " + myFunctionTest([4,6,8,6,6], function () {
    return a_myMap(arr);
}));

function b_myFilter(arr) {
    let c = arr.filter(function(elem, i, array){
        return elem === 3;
    });
    return c;
}
console.log("Expected output of b_myFilter(arr) is [3,3,3] " + myFunctionTest([3,3,3], function () {
    return b_myFilter(arr);
}));

function c_myReduce(arr) {
    let d = arr.reduce(function(prevValue, elem, i, array){
        return prevValue + elem;
    });
    return d;
}
console.log("Expected output of c_myReduce(arr) is 15 " + myFunctionTest(15, function () {
    return c_myReduce(arr);
}));