const user={
    username:"ayu",
    price:99,
    welcome: function(){
        console.log(`${user.username} , Welcome to our website!`);
    }
    }
user.welcome()
user.username="ayuu"
user.welcome()
// console.log(this)
// function one(){
//     let username="gaurav"
//     console.log(this.username)
//     }
// one()
// const one =function()
// {
//     let usename ="arty"
//     console.log(this.usename)
// }
// one()
const one=()=>{
    let usename="ayu"
    console.log(this.username)
}
one()
// arrow function  explicit type 
const add=(num1,num2)=>{
    return num1+num2

}
console.log(add(3,4))
// implicit type function calling 
const addt=(num1,num2)=>(num1+num2)
console.log(addt(5,6))


// iife (immediately invoked  function expression )
// IIFE IS  NOT WORKING PROPERLY AS WELL AND NOT UNDERSTOOD AS WELL .........
//
//
//
///
//
(function one(){
    console.log("DB CONNECTED");

})();
((name)=>{
    console.log(`i am here ${name}` );
})('ayu')
