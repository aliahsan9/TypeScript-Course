// let a1: number = 5;
// a1 = 5;

// function add1(a: number, b: number): number {
//     return a + b; // Type checking ensures 'a' and 'b' are numbers
// }

// const y: number = add1(1, a1); // Explicitly typing the result for clarity (optional)
// console.log(y); // Output: 3

// let num: number = 234_223_34;
// console.log(num);
// const num1 : bigint = 35165345247n;
// console.log(num1);
// let character:string = 'Ali Ahsan';
// let isAvailable: boolean = true;
// let numberArray : number[] = [2,3,4,5];
// let charArrar: string[] = ['a','b'];
// let val:undefined = undefined;
// let val1:null = null;
// let user;
// console.log(user);

// let obj: {Name : string, age : number} = {
//     Name : 'Ali Ahsan',
//     age :18,
// };
// obj = {...obj, age : 78};
// console.log(obj);

// //any type
// let numval : any;
//  numval = 6;
//  numval = 'a';

// //any type in functions
// function testanyType(val:any){
//     console.log(val);
// }


//Arrays
// let numberArray:number[] = [1,2,3,4,5];
// let characterArray:string[] = ['a', 'b'];


//tuples  //Every element has different dataType

// let arr:[string , number,boolean] =['ali ahsan', 5, true];
// let coordinates3D:[number, number, number] = [12, 3, 46];  // x, y and z axis


//localhost4200?name:ALI AHSAN Phone No.1234567
// let userdata: [string, number] = ['Ali Ahsan' , 1234567];

// let response:[number,string] = [200 , 'success'];
// response.push(0);//Drawbacks opf Tuples in ts
// console.log(response);

// userdata.push(11);//Drawbacks opf Tuples in ts
// console.log(userdata);
// response.pop();//Drawbacks opf Tuples in ts
// console.log(response);


//enum     //makes our code more readable and maintainable

// //pascal case
// enum color {
//     // MY_APP = 'My_ APP_Name',
//     Red = '1',
//      blue = '2',
//     green = '4',
// }
// console.log(color.blue);

// unknown type

// let notsue:unknown = 'a';
// if(typeof(notsue) === 'number'){
//     notsue.toFixed(2);
// }else{
//     if(typeof(notsue) === 'string'){
//         notsue.length;
//     }
// }
// console.log(notsue);


// function infiniteLoop(): never {
//     // Perform an endless task
//     while (true) {
//         console.log(1); // Logs "1" continuously
//     }
// }

// function throwError(message : string):never{
//     throw new Error (message);
// }


//void type

// function logMessage(message: string):void{
//     console.log(logMessage);
//     // return undefined;
// }


//type inference 
// let username = 'Ali Ahsan'; //typescript infers the type as a string automatically

// // type assersions
// let someVal: any = 'Hello, World!';
// let strLength: number = (someVal as string).length;
// console.log(strLength);


//union type          //it allows us that one value can have more than one types
// let id: string | boolean | number;
// id = 'ali ahsan';
// id = 7;
// id = true;
// //we can also use union in our functions
// function printId(id: string | number){
//     console.log(`id: ${id}`);
    
// }
// printId(5);
// printId('ali ahsan');



// //type narrowing
// function printId(id: string | number){
//     if(typeof id === 'string'){
//         console.log('id is a string: ', id.toUpperCase());
//     }else{
// console.log(`id is is a number ${id}`);

//     }
// }
// // printId(1);
// printId('ali ahsan');


// interface             //used for only type checking
// interface person{
//     name: string,
//     age: number,
//     greet(): void,
// };
// let person: person = {
//     name: 'Ali Ahsan',
//     age : 55,
//     greet(){
//         console.log('hello!')
//     }
// };
// person.greet();

// //Interfaace With Functions
// interface MathOp {
//     (a: number, b: number):number;
// }
// const add:MathOp = (x, y) => x + y;
// const subtract:MathOp = (x, y) => x - y;
// console.log('addition: ', add(2, 3));
// console.log('subtraction: ', subtract(7, 3));


// type alias   //it allows us to give meaningful name to our variable type
// type UserId = string;
// let userid: UserId  = 'abc';

// type person1 = {
//     name: string;
//     age : number;
// }
// let Person1:person1 = {
//     name: 'ali ahsan',
//     age: 45,
// };
// console.log(Person1.age);

// interface User {
//     name: string;
// }
// interface Customer extends User {
//     address: string;
//     phone:number;
// }
// let myCustomer: Customer = {
//     name: 'Ali Ahsan',
//     address: 'Lahore',
//     phone: 634356365,
// };
// console.log(myCustomer);



// type MathOp = (x: number, y: number) =>number;
// let add1:MathOp = (x, y) => x + y;

// type status = 'active' | 'inactive' | 'pending';
// let userStatus:status = 'active';
// console.log(userStatus);

// type Tree = {
//     value: string,
//     children: Tree[],
// };
// let tree: Tree = {
//     value : 'root',
//     children: [{
//         value: 'Child1',
//         children: [{
//             value: 'child2',
//             children:[],
//         }
//         ]
//     }]
// }
// console.log(tree);



// Intersection Types

// let config: {server: string , port: number} & {secure: boolean, timeOut:number} = {
//     server: 'Localhost',
//     port: 25,
//     secure: true,
//     timeOut: 30000,
// }
// console.log(config);


//functions

// function add(a:number, b:number):number{
//     return a + b;
// };
// console.log (add(5,7));

// // function Expressions
// const divide = function(a:number, b:number):number{
//     return a/b;
// };
// console.log(divide(10 , 5));



//arrow functions
// const multiply = (a:number, b:number):number => {
// return a*b;
// };
// console.log(multiply(3 , 4));



// Optional & default parameters
// function greet(username: string, greeting?: string): string {
//     return `${greeting ? greeting : 'Hello'} ${username}`; //use of ternary operator
//   }
  
//   console.log(greet('Ali Ahsan')); // Output: Hello Ali Ahsan
//   console.log(greet('Ali Ahsan', 'Hi')); // Output: Hi Ali Ahsan
  

// function Overloading
// function getLength(value: string):number;
// function getLength(value: any[]):number;
// function getLength(value: any):number {
//     return value.length;
    
// }
// console.log(getLength('ali'));
// console.log(getLength([1, 3, 5, 7]));



//Rest Parameters

// function sum(...numbers: number[]):number{
//     return numbers.reduce((total, num) => total + num, 0);
// };
// console.log(sum(1, 2, 3));


// //Rest parameters for strings
// function greet(greeting: string , ...names:string[]): void  {
//     names.forEach((name) =>{
//         console.log(`${greeting}, ${name}`);
        
//     });
// };
// greet('Hello', 'Ali', 'Ahsan', 'Ahmad');
