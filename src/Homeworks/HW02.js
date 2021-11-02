/**
 * @author Yener Karaca (yetty)
 * @since 02.11.2021
 * NOTE: I learned Java as my primary programming language so I like to add semicolons (;)
 * at the end of my code even though I know that it doesn't matter in javascript.
 */

/**
 * This function takes an indefinite number of parameters as a number of arrays
 * and returns a string with the information of if each number is a prime number or not.
 * 
 * @param {number[]} numbers
 * 
 * @returns {string} 
 */
 function isPrime(...numbers) {
    var results = "";
    var prime = true;
    for(var i = 0; i < numbers.length; i++) {

        if(numbers[i] <= 1) {
            results += numbers[i] + " is not a prime number. (less than one)\n";
        }

        else {
            for(var j = 2; j <= numbers[i] / 2; j++) {
                prime = true;
                if(numbers[i] % j == 0) {
                    prime = false;
                    break;
                } 
            }
            if(prime) results += numbers[i] + " is a prime number.\n";
            else results += numbers[i] + " is not a prime number.\n";
        }
    }
    return results;
}
/** 
 * This function takes two different numbers that checks if they are amicable(arkadaş) 
 * numbers. Click on this link https://en.wikipedia.org/wiki/Amicable_numbers
 * for more information about amicable numbers.
 * Turkish version available on https://tr.wikipedia.org/wiki/Arkadaş_sayılar
 * 
 * @param {number} number1
 * @param {number} number2
 * 
 * @returns {String} result
 */
function isAmicable(number1, number2) {
    if(number1 == number2) return "Invalid arguments, numbers must be different.";
    else if(number1 <= 1 || number2 <= 1) return "Numbers must be bigger than 1.";
    else {
        var i; var sum1 = 0; var sum2 = 0;
        for(i = 1; i <= number1 / 2; i++) {
            if(number1 % i == 0) {
                sum1 += i;
            }
        }
        for(i = 1; i <= number2 / 2; i++) {
            if(number2 % i == 0) {
                sum2 += i;
            }
        }

        if(sum1 == number2 && sum2 == number1) return number1 + " & " + number2 + " are amicable numbers.";
        else return number1 + " & " + number2 + " are not amicable numbers.";
    }
}
/**
 * This function returns the array of all the perfect numbers from 1 to 1000.
 * 
 * @returns {number[]} results
 */
function listPerfectNumbers() {
    var results = []; var tempResult = 0; var k = 0;
    for(var i = 1; i <= 1000; i++) {
        for(var j = 1; j <= i/2; j++) {
            if(i % j == 0) {
                tempResult += j;
            }
        }
        if(tempResult == i) {
            results[k] = i;
            k++;
        }
        tempResult = 0;
    }
    return results;
}

/**
 * This function returns the array of all the prime numbers from 2 to 1000.
 * 
 * @returns {number[]} results
 */
function listPrimeNumbers() {
    var results = []; var j = 0;
    for(var num = 2; num <= 1000; num++) {
        var prime = true;
        for(var i = 2; i <= num / 2; i++) {
            if(num % i == 0) {
                prime = false;
                break;
            }
        }
        if(prime){
            results[j] = num;
            j++;
        } 
    }
    return results;
}

//Test cases to see if the functions are working as intended (uncomment to try them out)

//First function tests
//console.log(isPrime(2, 5, 8, 21, 13));
//console.log(isPrime(3, 5, 91));
//console.log(isPrime(-10, -1, 0, 1));

//Second function tests
//console.log(isAmicable(220, 284));
//console.log(isAmicable(59, 192));
//console.log(isAmicable(5,5));
//console.log(isAmicable(-2, 20));
//console.log(isAmicable(1184, 1210));

//Third function tests
//console.log(listPerfectNumbers());

//Fourth function tests
//console.log(listPrimeNumbers()); 
//Note that this command will only going to display the
//first 100 element inside the array so we have to get creative to see the entire thing.
//Here's the rest of the array.
//console.log(listPrimeNumbers().slice(0,100)); 
//console.log(listPrimeNumbers().slice(100));