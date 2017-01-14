//////////////////PROBLEM 1////////////////////


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (name){
  if (name === 'Tyler'){
    return true;
  } else return false;
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
  var userName = prompt('What is your name?');
  return userName;
}

// console.log(getName());


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
    console.log("welcome is running")
    var userName = getName();
    var greeting = window.alert("Welcome, " + userName);
}

welcome();


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  /*a parameter is something defined in the function definition (e.g function myFunc(a,b)
  ...a and b are parameters); whereas arguments are things passed in to the function
  when it's called to take the place of parameters*/


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //0, undefined, NaN, false, null, ''


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    return "Mike Burton";
  }



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;


//Now alert the result of invoking newMyName

window.alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
    return function() {
      return "Mike Burton"
    }
  }


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
