// (Chapter 21 / Changing Case)

// (Q1)

var userInput = "Your Input String"; 
var allLower = userInput.toLowerCase();

console.log(allLower);


// (Q2)

var x = "Your Original String"; 
x = x.toLowerCase();

console.log(x);


// (Q3)

var y = "Your Original String";
y = y.toUpperCase();

console.log(y);


// (Q4)

var originalString = "Your Original String";
var lowerCaseString = originalString.toLowerCase();

console.log(lowerCaseString);


// (Q5)

var myArray = ["Your Original String"]; 
var lowerCaseElement = myArray[0].toLowerCase();

console.log(lowerCaseElement);


// (Q6)

var myString = "Your String";
var upperCaseString = myString.toUpperCase();

alert(upperCaseString);


// (Q7)

var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedCityName);



// (Chapter 22-25 / Strings)

// (Q1)

var sameWords = "captain";
var slicedString = sameWords.slice(1, 3);

console.log(slicedString);


// (Q2)

var myString = "Hello, World!";
var characterCount = myString.length;

console.log(characterCount);


// (Q3)

var animal = "elephant";
var seg = animal.slice(1, 5);

console.log(seg);


// (Q4)

var myString = "YourString";
var characterCount = myString.length;

console.log(characterCount);


// (Q5)

var myString = "Your String"; 
var characterCount = myString.length;
var slicedString = myString.slice(1, -3);

console.log("Character Count:", characterCount);

console.log("Sliced String:", slicedString);


// (Q6)

var text = "To be or not to be.";
var indx = text.indexOf("not");

console.log(indx);


// (Q7)

var text = "To be or not to be.";

var indx = text.lastIndexOf("be");

console.log(indx);


// (Q8)

var text = "Let's go to the park and then go eat.";
var indx = text.lastIndexOf("go");

if (indx !== -1) {
  indx = text.lastIndexOf("go", indx - 1);
}

console.log(indx);



// (Q10)

var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log("Character at index 2:", characterAtIndex2);


// (Q11)

var text = "This is a sample text.";

var cha = text.charAt(9);

console.log("10th character:", cha);


// (Q12)

var str = "This is a sample string.";

var x = str.charAt(str.length - 1);

console.log("Last character:", x);


// (Q13)

var input = "YourInputString";
var cha = input.charAt(4);

console.log("5th character:", cha);


// (Q14)

var myString = "YourString";
var specificCharacter = 'X';

if (myString.charAt(2) === specificCharacter) {
  console.log("The 3rd character is", specificCharacter);
} else {
  console.log("The 3rd character is not", specificCharacter);
}


// (Q15)


var originalString = "Your Original String";
var charArray = [];

for (var i = 0; i < originalString.length; i++) {
  charArray.push(originalString.charAt(i));
}

var reconstructedString = charArray.join('');

var reply = reconstructedString.replace("no", "yes");

console.log("Original String:", originalString);

console.log("Revised String:", reply);


// (Q16)

var str = "This is 1 example of 1.";
var newStr = str.replace("1", "one");

console.log("Original String:", str);

console.log("Revised String:", newStr);


// (Q17)

var x = "This is a sample text with some 'a' characters.";
var y = x.replace(/a/g, "z");

console.log("Original String:", x);
console.log("Revised String:", y);



// (Chapter 26 / Rounding Numbers)


// (Q1)

var numberToRound = 4.67;

var roundedNumber = Math.round(numberToRound);
console.log("Rounded Number:", roundedNumber);


// (Q2)

var origNum = 5.7;

var roundNum = Math.ceil(origNum);
console.log("Rounded Up Number:", roundNum);


// (Q3)

var origNum = 7.87;
var roundNum = Math.floor(origNum);

console.log("Rounded Down Number:", roundNum);


// (Q4)

var originalNumber = 5.1;
var roundedNumber = Math.round(originalNumber); 

console.log("Rounded Number:", roundedNumber);


// (Q5)

var originalNumber = 0.5;
var roundedNumber = Math.floor(originalNumber);

console.log("Rounded Number:", roundedNumber);



// (Chapter 27 / Random Numbers)


// (Q1)

var randomNumber = Math.floor(Math.random() * 50) + 1;
console.log("Random Number:", randomNumber);


// (Q2)

var randomVariable = Math.random();
console.log("Random Number:", randomVariable);


// (Q3)

function rollDice() {

  var result = Math.floor(Math.random() * 6) + 1;
  return result;

}

var diceResult = rollDice();

console.log("Dice Roll Result:", diceResult);


// (Q4)

function tossCoin() {

  var randomNum = Math.random();
  var result = randomNum < 0.5 ? "Heads" : "Tails";

  return result;
}

var coinTossResult = tossCoin();
console.log("Coin Toss Result:", coinTossResult);



// (Chapter 28-29 / Converting Strings)


// (Q1)

var str = "42";
var integer = parseInt(str, 10);

console.log("Converted Integer:", integer);


// (Q2)

function stringToInteger(str) {
  var integer = parseInt(str, 10);
  return integer;
}

var str = "123";
var convertedInteger = stringToInteger(str);
console.log("Converted Integer:", convertedInteger);


// (Q3)

var str = "3.14159";
var floatingPoint = parseFloat(str);

console.log("Converted Floating-Point Number:", floatingPoint);



// (Q4)



// (Q5)

var number = 50;
var stringNumber = String(number);

console.log("Converted String:", stringNumber);


// (Q6)

function numberToString() {
  var number = 42;
  var stringNumber = String(number);
  console.log("Converted String:", stringNumber);
}

numberToString();


// (Q7)

var decimalString = "3.14";
var floatNumber = parseFloat(decimalString);
var integer = Math.floor(floatNumber);

console.log("Converted Integer:", integer);



// (Chapter 30 / Controling  the length of decimals)


// (Q1)

var num = 3.141592653589793;
var newNum = num.toFixed(4).toString();

console.log("Rounded and Converted Number:", newNum);


// (Q2)

var num = 5.958547512654706;
num = Number(num.toFixed(2));
console.log("Rounded and Converted Number:", num);


// (Q3)


// (Q4)

var originalNumber = 123.456789;
var roundedString = originalNumber.toFixed(2).toString();
alert("Rounded Number (2 decimal places): " + roundedString);