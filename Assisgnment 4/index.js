console.log('Hello World')

// Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)

function jambScore(score) {
    if (score >= 180){
        console.log('Pass')
    } else {
        console.log('Fail')
    }
}
jambScore(179.90)

// Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".

function voterElgibility(age){
    if (age >= 18){
        console.log('You are eligible to vote')
    } else {
        console.log('Not eligible')
    }
}
voterElgibility(45)


//Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise

function grade(name , score){
    if (score >= 90){
        console.log('Excellent')
    } else if (score >= 75){
        console.log('good')
    } else if (score >= 50 ) {
        console.log('Average')
    } else {
        console.log('Fail')
    }

}

grade('Ebuka', 20)

// Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.

function authorization(hasId, isAbove18){
    if (hasId == true && isAbove18 == true){
        console.log('Access granted')
    } else {
        console.log ('not authorized')
    }
}

authorization(true, true)


// Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.

studScore = [50, 80.7, 30]

for (let a = 0; a < studScore.length; a++) {
    if (studScore[a]>50){
    console.log('Pass')
    }
    else {
        console.log('fail') 
    }
    
}

// Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".

const passGrade = (math =0, english = 0) => {
    if (math >= 50 && english >= 50) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

passGrade(70,90)

//Create a function that checks if a user has either an email or a phone number before signing up.

function authentication (email = '', phoneNumber = ''){
    if ( !email || !phoneNumber) {
        console.log('no email or phonenumber')
    }
}
authentication()

// Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.

function loginDetails (username = '', password = ''){
    if (username = null || password == null){
        console.log('invalid input')
    }
}

loginDetails('ju', 'kkk')

// Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.

function hrsWorked(hours){
    hours >= 40 ? console.log("fulltime") : console.log("part-time")
}

hrsWorked(39)


// Write an arrow function that takes two numbers and returns the larger one.

const compareNumber = (num1 =0, num2 = 0) => {
     num1 > num2 ? console.log(num1) : console.log(num2)
}
compareNumber(7,8)

