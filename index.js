/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/

var firstName = "Vic";
console.log(firstName);

var lastName = "Lee";
console.log(lastName);
/*/
*
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*

* Each value should be a Number
*
/*/
var favoriteNumber = 10;
var currentYear = 2017;
var thatOnePrinceSong = 1999;
console.log(favoriteNumber, currentYear, thatOnePrinceSong);

/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
var likesMcDonalds = false
var watchedMrRobot = false
var ranMarathon = false
var wrestledABear = false
var lovesDonuts = false
var readHarryPotter = false
var sleptInClass = true
var drinksCoffee = true
var shopsAtWholeFoods = true
var ownsRedShoes = true
console.log(likesMcDonalds, watchedMrRobot,ranMarathon,wrestledABear, lovesDonuts, readHarryPotter, sleptInClass, drinksCoffee, shopsAtWholeFoods, ownsRedShoes);

/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
var completedPrepClass = null;
var traveledToMars = null;
var scoredTDinNFL = null;
console.log(completedPrepClass, traveledToMars, scoredTDinNFL);
console.log(completedPrepClass, traveledToMars, scoredTDinNFL);

/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
// */
// Undefined means that there is no data housed in that variable, but null means that there is data in that variable, with the data being the word "null"

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/
var plateLunch = ['loco moco', 'ahi melt sandwich', 'seared ahi', 'chicken katsu curry', 'hawaiian salt chicken ramen']

var fruitBasket = ['dragonfruit', 'apple', 'watermelon', 'papaya', 'cantaloupe']

var westCoast = ['california', 'nevada', 'oregon', 'washington', 'new mexico']

var lotteryResult = [5, 3, 7, 10]

var duets = [['katherine mcphee', 'andrea bocelli'], ['rihanna', 'ne-yo'], ['diana ross', 'lionel ritchie']]

var mixPlate = ["", "null", 23, [2*1], 5+2>3+1,'peace'];

console.log(plateLunch, fruitBasket, westCoast, lotteryResult, duets,);
// 7
// * Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

// What is the length of this array? Please print the length (a number) to the console.
// What is the index position of carrot cake? Please print this item to the console.
// What is the index position of lemon bars? Please print this item to the console.

console.log(partyList.length)

console.log(partyList[0])//returns the item in the zero-index position

console.log(partyList[4])//returns the item in the "four"-index position


/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/
var fullName = firstName + " " + lastName
console.log(fullName)

var birthPlace = 'Honolulu'

var whereFrom = fullName + " " + "is from" + " " + birthPlace
console.log(whereFrom)

var mariahCareyAge = 12
var favSneaker = 'Skechers'
var favLoveSong = 'Emotions'
var coffeeShop = 'Coney Island Starbucks'

var mariahStory = 'At the age of' + ' ' + mariahCareyAge + "," + " " + "Mariah Carey," + " " + "wearing her fancy" + " " + favSneaker + ", " + "sang" + " " + favLoveSong + " " + "at the " + coffeeShop;
console.log(mariahStory);

/*
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
*/
var num1 = 10
var num2 = 21

var sum = num1 + num2

var difference = num1 - num2

var product = num1 * num2

var quotient = num1 / num2

var mod = num2 % num1
console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)
console.log(mod)

/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.



* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
*/
var isStrictlyEqual = "Tacocat" === "tacocat"

var isLooselyEqual = "Tacocat" == "tacocat"

console.log(isStrictlyEqual)
console.log(isLooselyEqual)

// not strictly equal b/c altho data type is the same, face value is not
// not loosely equal b/c face value must be equal
/*
* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?*/

var dis= 3 > 2 || 3 < 1
console.log(dis);

/*
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*/
var myBox = 10
console.log(myBox)

myBox += 1
console.log(myBox)

myBox *= 10
console.log(myBox)

myBox -= 10
console.log(myBox)

myBox %= 6
console.log(myBox)

myBox /= 2
console.log(myBox)
/*
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.*/
function bakePie(ingredient){
  return "Today's special " + ingredient + " pie"
} var pieResult = bakePie("blueberry")
console.log(pieResult)
/*
* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"


* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.*/

function jump(height){
  return "You jumped " + height + " feet high";
} var jumpResult = jump(9);

console.log(jumpResult);
/*
* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
*/
function cook(ingredient1, ingredient2, recipeName){
  return ingredient1 + " and " + ingredient2 + " make a " + recipeName + "!"
}
console.log(cook("Tomatoes", "Cheese", "Pizza"));