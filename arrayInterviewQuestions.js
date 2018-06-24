//string 
//loop through string to find spaces
//if it finds a space slice the where the space is at
//add %20 to the end where the space should be

function urlify(str) {
  let firstHalf = '';
  //loop throught the string
  for (let i = 0; i < str.length; i++) {
    //if the character is a space
    if (str[i] === ' ') {
      //add the sliced part of the string where the space was at
      firstHalf += str.slice(0, i) + '%20';
      //set str to the sliced version
      str = str.slice(i + 1);
      //reset counter since string is different size
      i = 0;
    }
  }
  return firstHalf + str;
}

console.log(urlify('www.thinkful.com /tauh ida parv een'))
//you should also comment out the code before writing it

//loop throught the arr


function arrFilter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(arrFilter([4, 6, -3, 5, -2, 1]));

function maxSumInArr(arr) {
  let currentSum = 0; // create tow variables for highest sum and current sum
  let highestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]; // currentSum + element in arr
    if (currentSum > highestSum) { //if currentSum is greater than highestSum
      highestSum = currentSum;//set highest sum to currentSum
    }
  }

  return highestSum;//return highestSum
}

console.log(maxSumInArr([4, 6, -3, 5, -2, 1]));

//create a loop that can iterate through both loops
//check the elements of the arr if one is bigger than the other one
//add it to a new arr

function mergeArrays(arr1, arr2) {
  //create a varibale to hold the merged arr
  let mergedArray = []
  let arr1Index = 0;
  let arr2Index = 0;
  //create a for loop that loops through both array
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    //check if the arr1 element is less than arr2 element
    if (arr1[arr1Index >= arr1.length]) { //if the arr1 index is greater than its length 
      mergedArray.push(arr2[arr2Index]); //add the rest of the arr2 array
      arr2Index++;//increment the arr2Index
    } else if (arr2Index >= arr2.length) { //if the arr2 index is greater than its length 
      mergedArray.push(arr1[arr1Index]); // add the rest of the arr1 array
      arr1Index++;//increment the arr1Index
    } else if (arr1[arr1Index] <= arr2[arr2Index]) { // if the arr1 element is greater than the arr2 element
      mergedArray.push(arr1[arr1Index]);//push the arr1 element to the merged array
      arr1Index++;//increment the array
    } else {
      mergedArray.push(arr2[arr2Index]);// push the arr2 element to the merged array
      arr2Index++;//increment the arr2Index
    }
  }
  return mergedArray;
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// create a function that removes a certain letter from the string
// create a function that loops through and removes the certain letters

//function that removes a letter from a string
function removeChar(str, char) {
  let modifiedString = '';
  //loop throught the string
  for (let i = 0; i < str.length; i++) {
    //if the index of the string is equal to the letter
    if (str[i] === char) {
      //slice the letter out
      modifiedString += str.slice(0, i);
      //set the string withouth the modified string part
      if (str[i] === char && str[i + 1] === char) {
        str = str.slice(i + 2);
      } else {
        str = str.slice(i + 1);
      }
      //reset the increment
      i = 0;
    }
  }
  //return the string
  return modifiedString + str;
}

//function that removes a given characters
function removeCharacters(str, chars) {
  //loop through the given characters
  for (let i = 0; i < chars.length; i++) {
    //run the function that removes a character
    //set the modified string as the default string
    str = removeChar(str, chars[i]);
  }
  //return the string
  return str;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//loop through the arr and multiply expect the index

//function to multiply expect the index
function products(arr) {
  //create a variable to hold the arr
  let result = [];
  //loop through the arr
  for (let i = 0; i < arr.length; i++) {
    //set a variable to hold the value
    let value = 1;
    //loop through the rest except the index
    for (let k = 0; k < arr.length; k++) {
      if (k !== i) {
        value *= arr[k];
      }
    }
    result.push(value);
    //multiply the index with the variable
  }
  //return the arr
  return result;
}

console.log(products([1, 3, 9, 4]));



//loop throught the string and slice the end and add to the front
//function
function stringRotation(str1, str2) {
  //if the length of str1 and str2 is different return false
  if (str1.length !== str2.length) return false;
  //create a bool variable
  let outcome = false;
  //loop throught the 
  for (let i = 0; i < str1.length; i++) {
    // slice the second string first char to the back
    let firstChar = str2.slice(0, 1);
    str2 = str2.slice(1);
    str2 += firstChar;
    //check if the string is equal to the second String
    if (str2 === str1) {
      outcome = true;
    }
  }
  return outcome;
}

console.log(stringRotation('amazon', 'azonam'));
console.log(stringRotation('amazon', 'azonma'));

//loop through rows and loop and through columns
//check if element is zero 
//clear the row and colum with zeros

function twoDArr(arr) {
  //create a 
};

console.log(twoDArr([
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
]))