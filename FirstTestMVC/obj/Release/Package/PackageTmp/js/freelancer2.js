//This is the function that runs when the submit button is clicked.
function numAlert() {

    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var num3 = document.getElementById('number3').value;
    var num4 = document.getElementById('number4').value;
    var num5 = document.getElementById('number5').value;
    if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "") {
        document.getElementById('answer').textContent = "Please enter a valid number into each number field.";
    }
    else {
        //the parseInt function allows the string values to be converted into numeric ones.
        num1 = parseInt(num1, 10);
        num2 = parseInt(num2, 10);
        num3 = parseInt(num3, 10);
        num4 = parseInt(num4, 10);
        num5 = parseInt(num5, 10);
        if (isNaN(num1) === true || isNaN(num2) === true || isNaN(num3) === true || isNaN(num4) === true || isNaN(num5) === true) {
            document.getElementById('answer').textContent = "";
            document.getElementById('answer1').textContent = "";
            document.getElementById('answer2').textContent = "";
            document.getElementById('answer3').textContent = "";
            document.getElementById('answer4').textContent = "Please enter a valid number into each number field.";
        }
        else {
            //Utilizing a Math object, the greatest and least number from the set is determined. The math object converts the
            //string values into numeric ones.
            var jimmy = Math.max(num1, num2, num3, num4, num5);
            document.getElementById('answer').textContent = "The greatest number is " + jimmy + ".";
            jimmy = Math.min(num1, num2, num3, num4, num5);
            document.getElementById('answer1').textContent = "The least number is " + jimmy + ".";

            //The numeric values are then utilized to find product, mean, and sum of the data set.
            var total = num1 + num2 + num3 + num4 + num5;
            document.getElementById('answer2').textContent = "The sum of all the numbers is " + total + ".";
            var mean = total / 5;
            document.getElementById('answer3').textContent = "The mean of the numbers is " + mean + ".";
            var product = num1 * num2 * num3 * num4 * num5;
            document.getElementById('answer4').textContent = "The product of all the numbers is " + product + ".";
        }
    }
};



function numAlert2() {
    var bobby = parseInt(document.getElementById('factorial').value, 10);
    if (bobby === 0) {
        document.getElementById('factorialAnswer').textContent = "The factorial is 1."
    }
    else if (bobby < 0) {
        document.getElementById('factorialAnswer').textContent = "Please enter a positive number.";
    }
    else {
        var fact = 1;
        //the inside of the for funtion could not be set to bobby because bobby is referenced within the for pretext in ().
        //if bobby were mentioned in for, its value would change in the pretext and thus the function would be stuck in a loop.
        for (var i = 1; i <= bobby; i++) {
            fact = fact * i;
        }
        document.getElementById('factorialAnswer').textContent = "The factorial is " + fact + ".";
    };
};


//This is another way of finding a factorial utilizing a recursive function
function numAlert22() {
    //utilizing a + in front of a string converts it into a number.
    var n = +document.getElementById('factorial').value;
    function factorial(int) {
        if (int < 2 && int >= 0) {
            return 1;
        }
        else if (int < 0) {
            return "Please enter a positive number.";
        }
        else {
            return int * factorial(int - 1);
        }
    }

    console.log(factorial(n));
}



function numAlert3() {
    var jimmy = parseInt(document.getElementById('fizz').value, 10);
    var bobby = parseInt(document.getElementById('buzz').value, 10);
    var dataSet = [];
    if (jimmy > 100 || bobby > 100) {
        document.getElementById('multiple').textContent = "Check both values. Please enter a value less than 100 but greater than 1.";
    }
    else if (jimmy < 2 || bobby < 2) {
        document.getElementById('multiple').textContent = "Check both values. Please enter a value greater than 1 but less than 100.";
    }
    else if (isNaN(jimmy) === true || isNaN(bobby) === true) {
        document.getElementById('multiple').textContent = "Please enter two numbers in the number fields.";
    }
    else {
        for (var i = 1; i <= 100; i++) {
            if (i % bobby === 0 && i % jimmy === 0) {
                dataSet.push('fizzbuzz\n');
            }
            else if (i % jimmy === 0) {
                dataSet.push('fizz\n');
            }
            else if (i % bobby === 0) {
                dataSet.push('buzz\n');
            }
            else {
                dataSet.push(i);
            }
        };
        document.getElementById('multiple').textContent = dataSet;
    };
};



function wordAlert() {
    var jimmy = document.getElementById('palindromeInput').value;
    var bobby = jimmy.toUpperCase();
    bobby = bobby.replace(/\s/g, '');
    var timmy = "";
    for (var i = bobby.length - 1; i >= 0; i--) {
        timmy += bobby[i];
    };
    //alert(timmy);
    if (timmy === bobby) {
        document.getElementById('palindrome').textContent = "The word/ phrase " + jimmy + " is a palindrome!";
    }
    else {
        document.getElementById('palindrome').textContent = "The word/ phrase " + jimmy + " is not a palindrome.";
    };
};

//Find the factors of a number and display them in an array
function factorFinder(number) {
    var factors = [];
    for (var i = 1; i < number; i++) {
        var remainder = number % i;
        if (remainder === 0) {
            factors.push(i);
        }
    }
    console.log(factors);
}


//Recursive Function adding numbers in an array together and displaying the sum.
var arraySum = function () {
    var numbers = [1, 2, 3, 4, 5];
    numIndex = numbers.length - 1;
    var answer = 0;
    function multiple(index) {
        if (index < 0) {
            return;
        }
        answer = answer + numbers[index];
        return multiple(index - 1);
    };
    multiple(numIndex);
    console.log(answer);
}

//Finds perfect numbers between 1 and 10,000.
var perfNumbers = function () {
    for (i = 1; i <= 10000; i++) {

        var factors = [];
        if (i === 1) {
            factors.push(1);
        };
        for (var j = 1; j < i; j++) {
            var remainder = i % j;
            if (remainder === 0) {
                factors.push(j);
            };
        }
        numIndex = factors.length - 1;
        var answer = 0;
        function multiple(index) {
            if (index < 0) {
                return;
            }
            answer = answer + factors[index];
            return multiple(index - 1);
        };
        multiple(numIndex);
        //console.log(answer);
        if (i === 1) {
        }
        else if (answer === i) {
            document.getElementById('displayPerfNums').textContent += "\n" + "The number " + i + " is a perfect number!" + "\n";
        }
    }
}

//Takes a number entered by the user and determines if it is a perfect number.
var perfNumberFinder = function () {
    var userInput = +document.getElementById('perfNumInput1').value;
    var factors = [];
    if (userInput === 1) {
        factors.push(1);
    }
    else if (userInput <= 0 || userInput > 10000) {
        document.getElementById('perfNumsAns').textContent = "Please enter a valid number greater than 0 and less than 10,000.";
    }
    else if (isNaN(userInput) === true) {
        document.getElementById('perfNumsAns').textContent = "Please enter a valid number greater than 0 and less than 10,000.";
    }
    else {
        for (var j = 1; j < userInput; j++) {
            var remainder = userInput % j;
            if (remainder === 0) {
                factors.push(j);
            };
        }
        numIndex = factors.length - 1;
        var answer = 0;
        function multiple(index) {
            if (index < 0) {
                return;
            }
            answer = answer + factors[index];
            return multiple(index - 1);
        };
        multiple(numIndex);
        //console.log(answer);
        if (userInput === 1) {
        }
        else if (answer === userInput) {
            document.getElementById('perfNumsAns').textContent = "The number " + userInput + " is a perfect number!";
        }
        else if (answer !== userInput) {
            document.getElementById('perfNumsAns').textContent = "The number " + userInput + " is not a perfect number.";
        }
    }

}
////Finds happy numbers between 1 and 100.
//var happyNums = function () {
//    for (var l = 1; l <= 50; l++) {
//        var num = l;
//        var numCheck = l;
//        num = num.toString();
//        var newNum = 0;
//        // The loop takes each of the numbers in the individual string for example console.log(num.substring(0, 1)) = 2 and
//        //console.log(num.substring(1, 2))= 3.
//        for (var k = 0; k < 5; k++) {
//            for (var i = 0, j = 1; i < num.length, j <= num.length; i++, j++) {
//                newNum += Math.pow(+num.substring(i, j), 2);
//            }
//            num = newNum.toString();
//            newNum = 0;
//        }
//        if (num === "1") {
//            console.log("The number " + numCheck + " is a happy number!");
//        }
//    }
//}

//Armstrong numbers between 100 and 999.
var armstrongNums = function () {
    for (var l = 100; l <= 999; l++) {
        var num = l;
        var numCheck = l;
        num = num.toString();
        var newNum = 0;
        for (var i = 0, j = 1; i < num.length, j <= num.length; i++, j++) {
            newNum += Math.pow(+num.substring(i, j), 3);
        }
        if (newNum === numCheck) {
            document.getElementById('displayArmstrongNums').textContent += "\n" + "The number " + numCheck + " is an armstrong number!" + "\n";
        }
    }

}

var push0 = function () {
    document.getElementById('calcScreen').textContent += "0";
};
var push1 = function () {
    document.getElementById('calcScreen').textContent += "1";
};
var push2 = function () {
    document.getElementById('calcScreen').textContent += "2";
};
var push3 = function () {
    document.getElementById('calcScreen').textContent += "3";
};
var push4 = function () {
    document.getElementById('calcScreen').textContent += "4";
};
var push5 = function () {
    document.getElementById('calcScreen').textContent += "5";
};
var push6 = function () {
    document.getElementById('calcScreen').textContent += "6";
};
var push7 = function () {
    document.getElementById('calcScreen').textContent += "7";
};
var push8 = function () {
    document.getElementById('calcScreen').textContent += "8";
};
var push9 = function () {
    document.getElementById('calcScreen').textContent += "9";
};
var pushPlus = function () {
    document.getElementById('calcScreen').textContent += "+";
};
var pushMinus = function () {
    document.getElementById('calcScreen').textContent += "-";
};
var pushDivide = function () {
    document.getElementById('calcScreen').textContent += "/";
};
var pushMultiply = function () {
    document.getElementById('calcScreen').textContent += "*";
};
var pushDecimal = function () {
    document.getElementById('calcScreen').textContent += ".";
};
var pushEquals = function () {
    var getEquation = document.getElementById('calcScreen').textContent;
    try {
        eval(getEquation);
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById('calcScreen').textContent = "Error";
        }
    }
    document.getElementById('calcScreen').textContent = eval(getEquation);
};
var pushClear = function () {
    document.getElementById('calcScreen').textContent = "";
}

