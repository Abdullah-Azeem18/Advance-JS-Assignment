
// Question 1

// let num=prompt("Enter any number");
// if(num%2==0){
// 	console.log("The number is even");
// }
// else{
// 	console.log("The number is odd");
// }

// Question 2

// let age=17;
// if(age>=18){
// 	console.log("Eligible to vote");
// }
// else{
// 	console.log("Not eligible");
// }

// Question 3

// for(let i=1;i<=10;i++){
// console.log(i);
// }

// Question 4
// let i=1;
// while (i<=20) {
//     if (i%2==0) {
//         console.log(i);
//         }
//         i++;
// }

// Question 5
// let Name="Mahad";
// for(let i=Name.length-1;i>=0;i--){
//     console.log(Name [i]);
// }

// Question 6

// function add(a,b){
//     let sum=a+b;
//     return sum;
// }

// Question 7
let number=+prompt("Enter a number");
function factorial(){
if (number===0||number===1){console.log(`The factorial of ${number} is 1`);
}
else{
    let fact=1;
for(i=number;i>1;i--){
       fact*=i;
    }
    console.log(`The factorial of ${number} is ${fact}`);
}
}
factorial();






// // Question 8
// let str="madam";
// let palindrome=()=>{
// let oppos=str.split("").reverse().join("");
// let check=str===oppos;
// return check;
// }
// if(palindrome()==true){
//     console.log(` ${str} is palindrome`);}
//    else {
// console.log(` ${str} is not a palindrome`);}

// Question 9
// let obj={
//     name:"Abdullah",
//     Roll_no:"CT-23309",
//     Marks:85,
//     Result:"pass"
// }

 // Question 10

// console.log(obj.name);
// console.log(obj["Roll_no"]);
// console.log(obj.Marks);
// console.log(obj["Result"]);

// Question 11

// const student = {
// 	name: "Abdullah",
// 	age: 18,
// 	print: function() {
// 		console.log(`Hello, I am ${this.name} `);
// 	}
// };
// student.print();

// Question 12

// const person={
//     Name:"abdullah",
//     Age:18,
//     class:"undergraduate"
// };
// for(A in person)
// {
// console.log(`${A}:${person[A]}`);
// }

// Question 13
 
// const Fruits=["apple","banana","watermelon","Mango"]
// console.log(Fruits);

// //  Question 14

// Fruits.unshift("guava");
// console.log(Fruits);

// // Question 15

// Fruits.pop();
// console.log(Fruits);

// // Question 16

// let checkforbanana=Fruits.includes("banana")? "Banana is present":"Banana is not present";
// console.log(checkforbanana);


// // Question 17
// const arr1=[8,9,15,7,18];
// const arr2=arr1.map((new_element)=> {return new_element*2;})
// console.log(arr2);

//    Question 18
// const age=[8,9,55,7,18];
// const elders=age.filter((new_element)=> {if(new_element>=18)
// return new_element;})
// console.log(elders);

// Question 19
// const age=[8,9,55,7,18];
// const elders=age.find((new_element)=> {if(new_element>=10)
// return new_element;})
// console.log(elders);

//    Question 20
//  const Fruits=["apple","banana","watermelon","Mango"];
//  const printloop=Fruits.forEach((Element)=>{
//     console.log(Element);});
//  console.log(printloop);
 
// // Question 21
// const std_scores=[{name:"Abdullah",marks:80},{name:"bilal",marks:40}];
// const stdt_names=std_scores.map((std_names)=> {return std_names.name});
// console.log(stdt_names)
 

// Question 22
// const std_scores=[{name:"Abdullah",marks:80},{name:"bilal",marks:40}];
// const pass_std=std_scores.filter(std_marks => std_marks.marks>50);
// console.log(pass_std)

// Question 23
// const std_scores=[{name:"zara",marks:80},{name:"bilal",marks:40}];
// const pass_std=std_scores.find(std_details =>std_details.name==="zara");
// console.log(pass_std)

// Question 24
// const std_scores=[{name:"zara",marks:80},{name:"bilal",marks:40}];
// const std_details=std_scores.forEach((std_det) =>{console.log(std_det)});
// console.log(std_details)

// Question 25
// const array= [2, 4, 6, 8];
// const new_array=array.map(square=>{return(square*square)});
// console.log(new_array);

// Question 26

// const Name=["Ali", "Zara", "Umar", "Ahmed"];
// const print=Name.forEach(element => console.log(element));
// console.log(print);

// Question 27

// const age=[12, 25, 17, 20, 16, 30];
// const elder=age.filter(ages=>{if (ages>18) return ages});
// console.log(elder);

// Question 28
// Fruits=["banana", "mango", "grapes", "apple"];
// const check=Fruits.filter(checking =>{if (checking==="apple") return checking});
// console.log(check);

// Question 29
// const student=[
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ];
// const high_marks=student.filter(student =>student.marks>90);
// console.log(high_marks);

// Question 30
// array= [200, 150, 300, 100];
//     let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=array[i];  
// }
// console.log(sum);

// Question 31
// const person=[
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ];

// const usernames=person.map(element => element.username);
// console.log(usernames);

// Question 32
// const arr=[1, 2, 3, 4, 5, 6];
// const oddnum=arr.filter(odd=>{return odd%2!=0} );
// console.log(oddnum);

// Question 33
// const str="javascript";
// const array=str.split("");
// console.log(array);
// let count=0;
// for(i=0;i<array.length;i++){
//     if (array[i]=="a"||array[i]=="e"||array[i]=="i"||array[i]=="o"||array[i]=="u"){
//         count++;
//     }
// }
// console.log(count);


// Question 34

// const student=[
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]
// const print =student.forEach(Element=>{const status=Element.completed==true?"Completed":"Incompleted";
//     console.log(`Task: ${Element.task} -status: ${status}`);});

// console.log(print);

// Question 35

// const employees = [
//   { name: "Ali", position: "Manager" },
//   { name: "Zara", position: "Developer" },
//   { name: "Umar", position: "Designer" }
// ];
// const updEmployees = employees.map(employee => {
//   return {...employee,status: "active" };
// });
// console.log(updEmployees);





