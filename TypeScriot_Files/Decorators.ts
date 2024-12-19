/* Decorators 
TypeScript decorators are an extension that allows adding annotation and metaprogramming to class declarations and their members in TypeScript. TypeScript supports decorators syntax as an experimental feature which is distinct from JavaScript decorators that is currently a Stage 3 ECMAScript proposal.
Decorators allow us to wrap another function in order to extend the behaviour of the wrapped function, without permanently modifying it. But before diving deep into decorators let us understand some concepts that will come in handy in learning the decorators.
*/


//Class Decorator
// function Loger(constructor: Function){
//     console.log(`Logging Creation is: ${constructor.name}`);
    
// }
// @Loger
// class people {
//     constructor(public name: string){}
// }
// const p = new people('Aslam');
// console.log(p.name);



//Method Decorator
// function logMethod(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
//     const originalMethod = descriptor.value; // Save the original method
//     descriptor.value = function (...args: any[]) {
//         console.log(`Method called: ${propertyKey}`); // Log method call
//         return originalMethod.apply(this, args); // Call the original method
//     };
// }

// class calcOp {
//     @logMethod
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }

// const calcNum = new calcOp();
// console.log(calcNum.add(2, 3)); // This will log "Method called: add" and output 5



//accessand property decorators
// function readonly(target: any, propertyKey:string){
//     Object.defineProperty(target, propertyKey,{
//         writable: false
//     });
// }

// class car{
//     @readonly
//     brand: string = 'Tesla';
// }
// const Cars = new car();
// console.log(Cars.brand);



//parameter decorators
// function logParameter(target: object, propertyKey: string, parameterIndex: number){
//     console.log(`Parameter in method ${propertyKey}, at index ${parameterIndex}`);
    
// }
// class userPara{
//     createUser(
//         @logParameter name: string,
//         @logParameter age: number
//     ){
//         console.log(`User ${name}, Age ${age}`);
        
//     }
// }
// const UserPara = new userPara();
// UserPara.createUser('Ahsan', 18);


// Problem. No.01: create a method decorator that logs the time taken for the execution of the method in ts? code only
// function LogExecutionTime(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ): PropertyDescriptor {
//     const originalMethod = descriptor.value;
  
//     descriptor.value = function (...args: any[]) {
//       const start = performance.now();
//       const result = originalMethod.apply(this, args);
//       const end = performance.now();
  
//       console.log(`Execution time for ${propertyKey}: ${end - start} ms`);
//       return result;
//     };
  
//     return descriptor;
//   }
  