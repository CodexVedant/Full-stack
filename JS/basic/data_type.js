//there are two type of data types primitive and non primitive 
//primitive data types = number, string, boolean, null, undefined, symbol, bigint
//non primitive data types = object, array, function ,date, map and set

//js is a loosly type language you dont have to declare the data type in it like we do in java,c++or c 
//just define and assign the value to the variable

var a = 10;
var b = "hello";
var c = true;
var c = false;
var d = 10.12;
var e = null;
var f;//undifine 
var f = undefined;

console.log({a,b,c,d,e,f});

//for checking the type use typeof() a built in method in js

console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e),typeof(f));

//converting string to number 

var str = "1";
var str2 = "2.2"
var str3 = "20"
console.log(str ,typeof +str);//convert string to number
console.log(str3, typeof Number(str3))
console.log(parseInt(str2));// get whole number(int) value and ignore 0 ,whitespace and decimal values 
console.log(parseFloat(str2));//string to number and get float number ignore 0 ,whitespac for string or symbol it show NaN(not a number)
//alternative method of retrieving a number from a string
var num = "1.1" + "1.1"; // '1.11.1'
var num2  = (+"1.1") + (+"1.1"); // 2.2
var num3  = ("1.1") + ("1.1");

console.log(num,num2,num3);

//number to string

var a = 10;
console.log("a",a,typeof(a),typeof String(a));
var b =10;
console.log("b",b,typeof(b + ""),typeof(b));

/*false and true value for condition(truthy and falsy vales)
true values
nonull(not empty) string,number,array and object */
//like
var a = 10,b = "hello", c =true, d = 1,e =-10;
// false values like
var a1= null, b1 = "", c1 =false, d1 = 0;//in short empty values and undifined

if(a){
    console.log("truthy value");
}else{
    console.log("flasy value")
}

//some exercise

var a = 10 + "20";
var b = "10" + 20;
var c = 10 - "20";
var d = "10" - 20;
var e = "hello" + " world";
var f = "hello" - "world";

console.log(a,b,c,d,e,f);

var a = false + true,b = true + true, c = false + false ,d = false - true,e = true - true , f = false - false
console.log(a,b,c,d,e,f);