document.write("------------------Q1)------------------<br>")
function tellFortune(childNum , partner , location , job) {
    document.write("You will be a "+job+" in "
        +location+", and married to"+partner+ 
        " with "+childNum+"N kids.");
}

tellFortune(3 , "Alice" , "Jordan" , "Software Developer")

//------------------------------------------------------------
document.write("<br>------------------Q2)------------------<br>")
function calculateDogAge(puppyAge) {
    document.write("Your doggie is"+puppyAge*7+" years old in dog years!");
}
calculateDogAge(1);
//------------------------------------------------------------
document.write("<br>------------------Q3)------------------<br>")

function calculateSupply(age,amount) {
    const maxAge=100;
    let rate = (maxAge-age)*365*amount;
    document.write("You will need "+rate+" cups of tea to last you until the ripe old age of 100;")
}
calculateSupply(22,4);
//------------------------------------------------------------
document.write("<br>------------------Q4)------------------<br>")

function greet(name){
    return "hello " + name
}
document.write(greet("sally"));

//------------------------------------------------------------
document.write("<br>------------------Q5)------------------<br>")

/*
5
what is the error:
function double(cat) {
  return 2 * x;
} the parameter not used + x not defiend!!!!

function double(7) {
  return 2 * 7;
} parameter is number!!!!!!

function double('7') {
  return 2 * 'x';
} parameter is string!!!!!!
*/
function double(x){
    return 2*x;
}
document.write(`function double(cat) {<br>
  return 2 * x;<br>
} the parameter not used + x not defined!!!!<br>
<br>
function double(7) {<br>
  return 2 * 7;<br>
} parameter is number!!!!!!<br>
<br>
function double('7') {<br>
  return 2 * 'x';<br>
} parameter is string!!!!!!<br> the correctness is `+double)
//------------------------------------------------------------
document.write("<br>------------------Q6)------------------<br>")

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
    return 2 * x ;
}

function double2 (x){
    return 2 * x;
}

function double3(x){
    return 2 * x;
}

document.write(double1+"<br>"+double2+'<br>'+double3+"<br>")

//------------------------------------------------------------
document.write("<br>------------------Q7)------------------<br>")

function cube (len) {
    return len**3;
}

document.write(cube(4));

//------------------------------------------------------------
document.write("<br>------------------Q8)------------------<br>")

function multiply (num1 , num2) {
    document.write(num1*num2)
}

multiply(3,4);

//------------------------------------------------------------
document.write("<br>------------------Q9)------------------<br>")

function canIGetADrivingLicense (age){
    if (age>=20)
        return "yes you can"
    else{
        let x = 20 -age;
        return "please come back after "+x+" years to get one"
    }
        
}

document.write(canIGetADrivingLicense(17))

//------------------------------------------------------------
document.write("<br>------------------Q10)------------------<br>")

function sameLength (str1 ,str2){
    if (str1.length == str2.length)
        return true
    else
        return false
}

document.write(sameLength("SAllY","Trees"))

//------------------------------------------------------------
document.write("<br>------------------Q11)------------------<br>")


function largerNubmer(n1,n2){
    if (n1>n2){
        return n1
    }
    else
        return n2
}

document.write(largerNubmer(7,3))

//------------------------------------------------------------
document.write("<br>------------------Q12)------------------<br>")

function smallerNubmer(n1,n2,n3){
    if (n1<=n2 && n1<=n3){
        return n1
    }
    else if(n2<=n1 && n2<=n3)
        return n2
    else 
        return n3
}

document.write(smallerNubmer(9,3,3))
document.write("<br>")
document.write(smallerNubmer(5,99,34))


//------------------------------------------------------------
document.write("<br>------------------Q13)------------------<br>")

function shorterString(str1 , str2 , str3 , str4 , str5) {
    let minString = Math.min(str1.length,str2.length,str3.length,str4.length,str5.length,)

    switch(minString){
        case str1.length:
            return str1;
        case str2.length:
            return str2;
        case str3.length:
            return str3;
        case str4.length:
            return str4;    
        case str5.length:
            return str5;
        default:
            "Error";
            break;
    }
}

document.write(shorterString("air","school","car","by","github")) 
document.write("<br>")
document.write(shorterString("air","tr","car","by","github")) 
document.write("<br>")
document.write(shorterString("by","tr","car","air","github")) 
document.write("<br>")
document.write(shorterString("air","by","car","school","github")) 
//------------------------------------------------------------
document.write("<br>------------------Q14)------------------<br>")

function longerString(str1 , str2 , str3 , str4) {
    let MaxString = Math.max(str1.length,str2.length,str3.length,str4.length)

    switch(MaxString){
        case str1.length:
            return str1;
        case str2.length:
            return str2;
        case str3.length:
            return str3;
        case str4.length:
            return str4;    
        default:
            "Error";
            break;
    }
}

document.write(longerString("air","school","car","by")) 
document.write("<br>")
document.write(longerString("air","tr","car","github")) 

//------------------------------------------------------------
document.write("<br>------------------Q15)------------------<br>")

function isEven(number) {
    if (number % 2 == 0)
        return (true)
    else
        return (false)

}

document.write(isEven(1))
document.write("<br>")
document.write(isEven(4))

//------------------------------------------------------------
document.write("<br>------------------Q16)------------------<br>")


function isOdd(number) {
    if (number % 2 != 0)
        return (true)
    else
        return (false)

}

document.write(isOdd(1))
document.write("<br>")
document.write(isOdd(4))

//------------------------------------------------------------
document.write("<br>------------------Q17)------------------<br>")

function positive(pos) {
    if (pos<0){
        return pos *-1
    }
    else{
        return pos
    }
}

document.write(positive(4))
document.write("<br>")
document.write(positive(-5))

//------------------------------------------------------------
document.write("<br>------------------Q18)------------------<br>")

function fullName(fName , lName) {
    return fName + " " +lName;
}

document.write(fullName("Adam","McCallen"))
document.write("<br>")
document.write(fullName("Alex", "Mercer"))
//------------------------------------------------------------
document.write("<br>------------------Q19)------------------<br>")

function average(n1 ,n2 ,n3 ,n4 ,n5) {
    let sum = n1 + n2 + n3 + n4 + n5;
    let avg = sum /5;
    return avg;
}

document.write(average(1,2,3,4,5))
document.write("<br>")
document.write(average(5,7,9,3,5))

//------------------------------------------------------------
document.write("<br>------------------Q20)------------------<br>")

function randomNumber() {
    let random = Math.random()
    return random
}

document.write(randomNumber())
document.write("<br>")
document.write(randomNumber())

//------------------------------------------------------------
document.write("<br>------------------Q21)------------------<br>")

function randomBetweenNumbers(num1 ,num2) {
    let random = Math.random() * (num2 - num1) + num1;
    return random
}

document.write(randomBetweenNumbers(1,8))
document.write("<br>")
document.write(Math.floor(randomBetweenNumbers(3,100)) )

//------------------------------------------------------------
document.write("<br>------------------Q22)------------------<br>")

function scoreInUniversty(grad) {
    if(grad>=95 && grad<=100)
        return "A"
    else if(grad>=85 && grad<=94)
        return "B"
    else if(grad>=70 && grad<=84)
        return "C"
    else if(grad>=50 && grad<=69)
        return "D"
    else if(grad>=0 && grad<=49)
        return "F"
    else{
        return "Number is out of range please enter a valid number between 0-100"
    }
}

document.write(scoreInUniversty(96)) 

//------------------------------------------------------------
document.write("<br>------------------Q23)------------------<br>")
//way1
document.write("<br>   way1    <br>")

let count = 0;

function counter(rest=false) {
    if (rest == true)
        return count = 0;

    count += 1;
    return count;
}

document.write(counter()); 
document.write(counter()); 
document.write(counter()); 

// //way2 after search on another ways
// document.write("<br>   way2    <br>")

// function increment() {
//     let count = 0; // Local variable in the outer function's scope
  
//     return function() {
//       count += 1; // Increment the value of count
//       return count; // Return the updated value
//     };
//   }
  
//   // Usage
// const myCounter = increment(); // Creates a new closure, myCounter has access to count
  
// document.write(myCounter()); // count = 1, output: 1
// document.write(myCounter()); // count = 2, output: 2
// document.write(myCounter()); // count = 3, output: 3
  

//------------------------------------------------------------
document.write("<br>------------------Q24)------------------<br>")


function resetCounter(){
    let count = counter()-1;
    counter(true);
    return count + ' and the counter reset now'

}

document.write(resetCounter())
document.write("<br>")
document.write (counter())
