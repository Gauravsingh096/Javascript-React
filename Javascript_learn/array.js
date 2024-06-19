// const my_arr=[1,2,3,4]
// var i=0;
// while(i<my_arr.length){
//     console.log(`the element at ${i} is : ${my_arr[i]}`);
//     i++;
// }
// let myArr=new Array(1,2,3,4,5);
// console.log(`${myArr[1]}`);
// myArr.push(9);
// console.log(myArr);
// myArr.pop();
// myArr.unshift(0);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// console.log(myArr.indexOf(3));
// console.log(myArr.includes(6));
// const new1 =myArr.join()
// console.log(new1)
// // slice ,spice 
// const my1=my_arr.slice(1,3);
// console.log(my1);
// const my2=my_arr.splice(1,3 );
// console.log(my2);

// part 2 
const marvel=["thor","iron","captain"];
const dc=["super","flash"]
// marvel.push(dc)
console.log(marvel)
const all =marvel.concat(dc)
console.log(all)
const all1=[...marvel,...dc]
console.log(all1)
const arr1=[1,2,[1,3,4,[1,3,4]],[1,3,4],[1,2,3]]
const arr2=arr1.flat(Infinity)
console.log(arr2)

console.log(Array.isArray("gaurav"))
console.log(Array.from("gaurav"))

