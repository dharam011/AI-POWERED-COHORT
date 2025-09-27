// console.log("hello world");
// console.warn("hello world");
// console.error("hello world");

// // console.log(35*2-(10/2)+7);
// console.log(typeof"1234");
// console.log(typeof 1234);
// console.log(typeof true);
// console.log(typeof  null);
// console.log(typeof  NaN);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});


// console.groupCollapsed("mera kam");
// console.log("hello");
// console.log("dhaRAM");
// console.log("MY NAME IS ");
// console.groupEnd();
   

// const obj ={
//     name:"dharam",
//     age : 21,
//     course: "BCA"

// }



// obj.age=32
// console.log(obj.age);
// // if want that object cant not be updated 
//  Object.freeze(obj)
//  // now this object cant be updated 


// var arr= [4,4,2,5,2,42]
// arr.forEach(function(value){
//     console.log(value);
// })
// var ans =arr.map(function(value){
//     return value*3
// })
// console.log(ans);

// var filt= arr.filter(function(v){
// return v >=4
// })
// console.log(filt);


// var sum = arr.reduce(function(accumulator, key){
//   return accumulator+key;
// },0)
// console.log(redu);

// var i = 3;
// while(i<=30){
//     console.log(i);
//     i+=3;
    
// }
// var sum =0;
// for (i=0;i<101;i++){
//     sum=sum+i
// }
// console.log(sum);

// for(i=1;i<=5;i++){
//     for (j=1;j<=i;j++){
//         console.log("*");
        
//     }
// }

// // for of loop 
// var str ="dharamkushwaha"
// for(var i of str){
//     console.log(i);
    
// }


// var ar= [4,2,4,2,42,3,4,32,342,1,3,4,5,6,87,8,9,3];
// var ar2 =[... new Set(ar)]
// console.log(ar2);


// // js practice session 3

// var arr =[341,645,345,678,786];
// var ans =[...new Set(arr)]; // give the unique elements .
//  var ans = arr.sort(function(a,b){
//     // descending order 
// return b-a;
// // if want to return ascending order 
// // return a-b;

//  })
//  console.log(ans);
//  console.log(ans[1]);
 
// march 03 qs on HOFs , callback and closures

// Qs 1 ..............create a function that takes another 
// function as an argument and call that function in 3 second 

// function callerfn(fn){
//     setTimeout(fn,3000)    ;

// }

// callerfn(function(){
// console.log("hello")
// })

// QS 2..  implement your own version of .map 

// var arr= [1,4,2,5,7,8,5,3,2,1,4,6,78];
// function dharamap(array,fn){
//  var newArr =[];
//  for (let i =0;i<array.length;i++){
//   newArr.push(fn(arr[i]))
//  }
//  return newArr;

// }

// var ans = dharamap(arr,function(value){
// return value +2;
// })


// write a function that uses closures to create a counter

// function counter (){
//   var i=0;
//   return function (){
//     i++;
//     console.log(i);
    
//   }
// }
// var count= counter()
// count()
// count()
// count()
// count()
// count()
// count()



// //Qs 4 ..
// //implement a function that limits a function that 
// how many times the function can be called .

function fnlimiter (fn , limit)
{
  let totalcalled=0;
  return function (){
    if (totalcalled<limit){
      totalcalled++;
      fn();
    }
  }
}
 
var fun=fnlimiter(function (){
  console.log("hello");
  
},5)
fun()
fun()
fun()
fun()
fun()
fun()
fun()




// // DAY - MARCH 4 
// // QS 1.

// function barbar(fn,time){
//   setInterval(fn,time)
// }
// barbar(function(){
//   console.log("hello")
// },2000)


// // qs 2. 

// var arra=[3,5,7];
//  function MAP(arr,fn){
//   var newARR =[];
//   for(let i=0;i<arr.length;i++){
//     newARR.push(fn(arr[i]))
//   }
// return newARR;
//  }
// var dharmap=MAP(arra,function(value){
//   return value+5;
// })