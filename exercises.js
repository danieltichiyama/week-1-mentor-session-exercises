/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
* @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

 function firstReverse(str){
    if (typeof str !== 'string'){
        return null;}
    var strArr = str.split("");
    var revStrArr = [];
    for (i = strArr.length-1;i>=0;i--){
    revStrArr.push (strArr[i]);
    }
    reverseString = revStrArr.join("");
    console.log (reverseString);
    return reverseString;
}

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder (str){
    if (typeof str !=='string'){
        return null
    }
    var strArr = str.split ("");
    var alphabetized = strArr.sort().join("");
    return alphabetized;
}

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

function vowelCount (num){
    if(typeof num !== 'string'){
        return null;
    }
    count = 0;
    var vowels = 'aeiou'
    for (i=0;i<num.length;i++){
        // console.log ('pass'+i)
        // console.log(vowels.indexOf(num[i]));
        if (vowels.indexOf(num[i])==-1){
            count = count;
        }else{
            count +=1;
        }
    }
    console.log(num);
    return count;
}

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

function timeConvert (num){
    if (typeof num !== 'number'){
        return null;
    }
    var hours = Math.floor(num/60);
    var minutes = num%60;
    console.log (num);
    console.log (hours);
    console.log (minutes);
    timeString = hours + ":" + minutes;
    console.log (timeString);
    return timeString;
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

function repeatedString (str, times){
    if (typeof str !== 'string' || typeof times !== "number"){
        return null;
    }
    if (times <0){
        return "";
    }
    var arr=[];

    for (i=0;i<times;i++){
        arr.push (str);
    }

    // console.log(arr);

    repeatedString = arr.join("");

    return repeatedString;
}

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatedString
}
