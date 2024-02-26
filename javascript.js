// console.log("somi batool")
// console.log("i love javascript")
// console.log("i am front end developer")
// fullname:"batool";
// age=12;
// price=22.34;
// x=null;
// y=undefined;
// radius=23;
// isfollow=true;
// let age =25;
// const id=123;
// let namefull="somi batoool"

// console.log(age);
// console.log(id);
// console.log(namefull);
// let isfollow= true;
// const student ={
//     fullname :"somi batool",
//     age :12,
//     ispass :"true",

// };
// const profile={
//     username:"@somi batool",
//     followers: 234,
//     following:4,
//     isfollow:true,
//     bio: "hvjvkcutdycg",
// };
// we use this to check our datatype of an object 
// console.log(typeof profile["followers"])
// Artimetic operator
// let a=3;
// let b=4;
// console.log("a=",a , "b=" ,b)
// console.log("a + b =", a+b)
// console.log("a - b =", a-b)
// console.log("a * b =", a*b)
// console.log("a / b =", a/b)
// console.log("a % b =", a % b)
// console.log("a ** b =", a ** b)


// unary operators
// let a=2;
// let b=3;
// console.log("a = ", a , "b=" , b)
// a++;
// console.log("a =", a);
// b--;
// console.log("b =", b);

// Assignment operators
// let a=6;
// let b=2;
// here this means that a=a+4;
// a += 4;
// console.log("a =", a);
// COMPARISION OPERATORS

// let a="5";
// let b=5;
// console.log("5===5", a===b);
// console.log("2!=5", a!=b);
// logical operators
// let a=5;
// let b=6;
// let cond1 = a<b;
// let cond2 = a>b;
// console.log("cond1 && cond2 =", cond1 && cond2);
// let color;
// if(mode === "dark-mode"){
//     color = "black";
// }
// let age = 17;
// if(age > 18){
//     console.log("you can vote");
// }
// let mode = "white";
// let color;
// if(mode =="dark"){
//     color = "black"
// }
// else{
//     color = "white";
// }
// console.log(color);
// let a=13;

// if(a%2==0){
//     console.log("a is even number");
// }
// else{
//     console.log("a is odd number");

// }
// let age = 16;
// if(age>=18){
//     console.log("they can vote");
// }else{
//     console.log("they can't vote")

// }
// let mode = "pink";
// let color;
// if(mode=="dark"){
//     color = "black";
// } else if(mode=="pink"){
//     color="pink";
// }
// else if(mode=="red"){
//     color="red";
// }
// else if(mode=="yellow"){
//     color="yellow";
// }else{
//     color= "white";
// }
// console.log(color);
// ternary operator
// let age=19;
//  let result = age>18?"adult":"not adult";
//  console.log(result);
// practical work
// let num = prompt ("entre a number");
// if(num%5==0 ){
//     console.log(num ,"number is multiple of 5");
 
// }else{
//     console.log( num, "number is not a multiple of 5")
// }
// let score=96;
// let grade;
// if(score>=90 && score <=100){
//     grade="A"  
// }
// else if(score>=70 && score <=80){
//     grade="B" 
// }
// else if(score>=60 && score <=70){
//     grade="C"
// }
// else if(score>=50 && score <=40){
//     grade="D" 
// }else{
//     grade="F" 
// }
// console.log("your grade is " , grade)
// chapter 3 (loops and string) for loop
// for(let i=1; i<=10; i++){
//     console.log("somi batool... I am front end developer ");
   
// }
// calculate sum of 1 to 5;l
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum=sum+i;
// }
// console.log("sum of i=" ,sum);
// console.log("loop has been ended")
// while loop
//    let i=1;
// while(i<=5){
//     console.log("value of i is =", i)
//     i++;
// }
// do while loop
// let i = 1;
// do{
//     console.log("i =", i)
//     i++;
// }
// while(i<=10);
// print all the even numbers
// let num;
// for(num=1; num<=100; num++){
//     console.log(num)
// }
// let i;
// for(i=1; i%2==0; i++){
//     console.log(i," this num is even")

// }
// let num=5;
// if(num%2==0){
//     console.log(num ,"is even")

// }else {
//     console.log(num ,"is odd")

// }
// for(let num=0;num<=100; num++){
//     // console.log("num =" , num);
//     if(num%2==0){
//         console.log("num =" ,num);
//     }

// }
// lets making a game
// let gamenum=10;
// let usernum= prompt("guess the number");
// while(usernum != gamenum){
//  usernum= prompt("you entred wrong number'guess the number again");

// }
// console.log("congratulation you entred right  number")
// stringss
// let str="somi";
// let str2="alibaba";
// practice question
// let fullname= prompt("Entre your fullName");
// let username="@"+fullname + fullname.length;
// console.log(username);
// Array
// console.log(marks)
// let marks = [20, 10, 30, 40,50 ,40, 50,70];
// for(let indx=0; indx < marks.length; indx++){
//     console.log(marks[indx]);
// }
// let marks=[85 ,97, 44, 37,76 , 60];
// let sum =0;
// for(let val  of marks){
//     sum =sum +val;  
// }
// console.log(sum)
// let avg = sum/marks.length;
// console.log(avg);

// let items = [250, 645, 300,900,50];
// for(let i=0; i < items.length; i++){
//    let offer= items[i]/10;
//    items[i]= items[i]-offer;
// }
// console.log(items);
// let fruit =["apple", "banana","mango", "orange"];
// console.log(fruit)
// console.log(fruit.toString());
// console.log(fruit);
// let deltitem = fruit.pop();
// console.log("delet item is ",deltitem)
// concatanitaion
// let boysnam =["zakir", "mehboob", "faizu"];
// let girlsnam = ["fatima" , "basila" , "somi"];
// let friends = boysnam.concat(girlsnam);
// console.log(friends);
//  boysnam.shift("somi");
// console.log(all);
// let marks =[10, 20, 30 ,40 ,50];
// console.log(marks);
// marks.splice(2 , 3 , 29,32,12);
// console.log(change)



// let comp = ["shedev" , "texhozid" , "pinetechnologies" , "ibex" , "google"];
// comp.shift();
// comp.splice(2,1 , "ola");
// comp.push("amzon");

// function
// function myFunction(){
//     console.log("hello !! its me somi batool");
//     console.log("I am learning JS");
// }
// myFunction();
// function sum(a , b){
//     sum = a+b;
//     console.log("sum of ", a , "and" , b , "=", sum);

// }
// sum(23 , 12);

// function countvowels(str){
//     let count =0;
//     for (const char of str){
//         if( char=="a" && char=="e"  && char=="i"  && char=="o"  && char=="u"){
//             count ++;
//         }
//     }
//     console.log(count);
// }
// let arry = ["gilgit" ,"hunza"];
// arry.forEach((val) =>{
//     console.log(val.toUpperCase());
// }
// )
    // let nums = [1, 2, 3, 4, 5, 6];
    // nums.forEach((num)=>{
    //     console.log(num*num);
    // })
// let sums =[34];
// sums.forEach((sum)=>{
//     console.log(sum+sum)
// })
// let arr =[1,2,3,4,5,6,7,8,9,10,12,13,14,15];
// let evenarr = arr.filter((val)=>{
//    return  val % 2!==0;
// });
// console.log(evenarr);
// reduce
// let arr =[4,6,7];
// let output = arr.reduce((res , curr)=>{
//    return res<curr ? res :curr;
// });
// console.log(output);
// let marks = [50, 96, 91, 40,99];
//  let topper= marks.filter((pre)=>{
//    return pre>90

// });
// console.log(topper);
// let n = prompt("Entre the vales");
// let arr =[];
// for(let j=1; j<=n ; j++)
// {
//     arr[j-1]=j;
// }
// console.log(arr);

// let res= arr.reduce((pre, curr)=>{
//  return pre+curr;
// });
// console.log(res);
// let mul = arr.reduce((pre, curr)=>{
//     return pre*curr;
//    });
//    console.log(mul);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from apna college students";
// let divs =document.querySelector(".box");
// let indx =1;
// for(div of divs ){
//     div.innerText="Unique values" , indx;
//     indx++;
// }

let btn = document.querySelector('#btn');
btn










