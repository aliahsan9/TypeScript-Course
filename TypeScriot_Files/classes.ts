// classes
// class Person{
//     name: string;
//     age:number;

//     constructor (name: string, age:number){
//         this.name = name;
//         this.age = age;
//     }
//     greet():string {
//         return (`My Name is ${this.name}, and I am ${this.age} years old.`);
//     }
// };
// const new_person = new Person ('Ali Ahsan', 18);
// console.log(new_person.greet());



/*Access modifiers (public, private, protected)
public: Accessible from anyWhere. This is default, if no modifier is specified.
Private: Accessible only within the class.
Protected: Accessible within the class and its subClasses.

*/

// class car1{
//     public make: string;
//     model: string;
//     brand: string;

//     constructor (make:string, model: string, brand:string){
//         this.make = make;
//         this.model = model;
//         this.brand = brand;
//     }
//     carDetails():string {
// return (`${this.make}, ${this.model}, ${this.brand}`);
//   }
//   public getmMdel(): string {
//     return this.model;
//   }
// };
//   const carDetails = new car1 ('Honda Civic', 'New2025', 'Tesla');
//  console.log(carDetails.model);



//Inheritance
// Inheritance in TypeScript
// class Animal { // Parent Class
//   public name: string;

//   constructor(name: string) { // Corrected: Added parameter and parentheses
//     this.name = name;
//   }

//   makeSound(): void { // Corrected: Added parentheses for the method definition
//     console.log('Some generic sound...');
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) { // Corrected: Added parameter and parentheses
//     super(name); // Corrected: Call the parent class constructor with a parameter
//   }

//   makeSound(): void { // Corrected: Method should override parent class method
//     console.log('Woof! Woof!');
//   }
// }

// const dog = new Dog('Puppy'); // Corrected: Variable name should be lowercase
// dog.makeSound(); // Corrected: Fixed method name typo





//Abstract Class         //Share common code (methods or properties) across related classes.
// abstract class shape {
//    abstract getArea():number;   //Abstract Method must be implemented at SubClasses
//    printArea(): void {
// console.log(`Area is ${this.getArea()}`);

//    }
// }
// class Reactangle extends shape {
// constructor (private width: number, private height:number){
//     super();
// }
// getArea(): number {
//    return  this.height*this.width;
// }
// }
// const rect = new Reactangle (5, 6);
// console.log();
// rect.printArea();



// Setters & Getters // setters for setting a particular value & getters for fetching particular value
// class Circle {
//     private _radius: number;

//     constructor(radius: number) {
//         this._radius = radius;
//     }

//     get radius(): number {
//         return this._radius; // Correctly access the private field
//     }

//     set radius(value: number) {
//         if (value < 0) {
//             throw new Error('Unable to set negative values!');
//         }
//         this._radius = value; // Correctly assign to the private field
//     }
// }

// const circle = new Circle(5); // Variable name should not conflict with the class name
// console.log(circle.radius); // Access the getter

// circle.radius = 10; // Access the setter
// console.log(circle.radius); // Verify the updated value



/*
 Problem No.01
Create a BankAccount Class with following properties:
accountNumber = string;
balance:number (private);

The Class should have Methods:
deposit(Amount:number):void (to add to balance)
withdraw(Amount:number): void (to subtract from balance)
getBalance: number (to return current balance)
*/

// class BankAccount{
//     private balance:number;
//     constructor (public accountNumber:string, initialBalance:number){
//         this.balance = initialBalance;
//     }
//     deposit (amount: number): void{
//         this.balance += amount;
//     }
//     widthdraw (amount: number){
//         if(amount > this.balance){
//             throw new Error ('Insufficient Balance!');
//         }
//         this.balance -= amount;
//     }
//     getBalance():number{
//         return this.balance;
//     }
// }
// const myAccount = new BankAccount('hgf43jg', 1000);
// myAccount.widthdraw(100);
// myAccount.deposit(500);
// console.log(myAccount.getBalance());






/*
Create an Employee Class with Inheritance.
Define an Employee Class, with properties name and salary.
Create a subclass manager that adds that adds a department property.
Both classes should have a getDetails Method that returns a string with the employee's Details.
*/

// class Employee {
//     name:string;
//     salary:number;

//     constructor(name:string, salary:number){
//      this.name = name;
//      this.salary = salary;
//     }
//     getDetails(): string{
//         return `Name ${this.name}, Salary ${this.salary}`;
//     }
// }
//     class Manager extends Employee{
//      public Department: string;

//      constructor(name:string , salary: number, Department: string){
//      super(name , salary);
//      this.Department = Department;
//      }
//      getDetails(): string {
//          return `Name ${this.name}, Salary ${this.salary}, Department ${this.Department}`;
     
//     }
    
// }

//     const emp = new Employee('Ali Ahsan', 15000);
//     const manager = new Manager('Aslam', 50000, 'HR');
//     console.log(emp.getDetails());
//     console.log(manager.getDetails());
    