// run `node index.js` in the terminal

const c=require('./script.js');//for import export use either .mjs extension or use type:module in package.json file.

console.log(c.largeNumber);
// const response = await fetch("https://jsonplaceholder.typicode.com/users");

// const data = await response.json();

// console.log(data);
//this is throwing an error--wait is only valid in async functions and the top level bodies of modules.................

//...................
// let a;
// if(true)
// {
//   const {largeNumber }= await import  ('./script.js');
//   a=largeNumber;
// }
// console.log(a);
//......................................................
// (async()=>{
//   let a=await import  ('./script.js');
//   console.log(a.largeNumber);
// })();
//.......................................................
//there are 3 kinda modules-import()as above then 2---built-in like fs and http
// const c=require('fs');
// console.log(c);
//................................
//NODEMON is a npm package which automatically run terminal for us rather than doing node index.js again and again also it 