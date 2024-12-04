console.log(2+2);
num = 3
num = 4
num = num + 2
console.log(num);
num = 6
num = 'six'  //string 
console.log(num);
//syntax error 
//logical errors - bugs
let num1 = 10
let num2 = 2
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 % num2)

// type of 
let x = 6
console.log(x)
console.log(typeof x); //number
let y 
console.log(typeof y); // undefined 
let value = "478"
console.log(typeof value) //string
//type conversion
let value1 = Number("478ronak")
console.log(typeof value1)
//NaN not a number (illeagal number)
let value2 = Number("478ronak")
console.log(value2 , typeof value2)
// num = num + 2    is same as num +=2 //short hand  //
// pre increment ++num 
let ra = 7
++ra
console.log(ra);
// post increment num++
let ro = 10
let ro1 = ro++
console.log(ro,ro1);
//relational operators <,>,==,!=
// == compare value not type 
// === compare value as well as type
let value4 = "ray"
let value5 = "ronak"
let result = value4 + value5
console.log('the addition of ${value4}and ${value5} is ${result} ')
// conditions 
let ri = 5
if(ri%2===0)
    console.log("even");
else
     console.log("odd");

//logical operators and &&   or ||   not!
// while 
let o = 1
while(o<=6){
    console.log("ronak ji ");
    o++;
}
