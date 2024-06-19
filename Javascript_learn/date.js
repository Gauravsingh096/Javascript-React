let my=new Date()
// console.log(my.toString());
// console.log(my.toDateString());
// console.log(my.toISOString());
// console.log(my.getTimezone());
console.log(typeof(my));
let mydate= new Date(2024,3,15);
console.log(mydate.toLocaleString());
let new1= new Date("01-04-2024");
console.log(new1.toLocaleString());
let new2 = new Date('May 7, 2024');
console.log(new2.toLocaleString());
let x="gaurav"
console.log(` my name is ${x} and i want to call me ${x}`);
let newDate= new Date();
let oldDate= new Date(1998,6,15)
if (oldDate<newDate){
    console.log("i am younger than you")
}else{
   console.log("you are younger than me")  
}
console.log(Math.abs(-10));
let num1=10;
let num2=5;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
let bool1=true;
let bool2=false;
console.log(!bool1);
console.log(bool1&&bool2);
console.log(bool1||bool2);
console.log(bool1==bool2);
console.log(bool1!=bool2);
console.log(bool1===bool2);

