
/*Generics
Generics are a way to create components (functions, classes or Interfaces) That works with different types 
without losing the type Safety.
*/

// Generic Functions 

// function genericIdentity<T>(arg: T):T{
//    return arg;
// }
// console.log(genericIdentity<number>(10));
// console.log(genericIdentity<string>('ALi Ahsan'));
// console.log(genericIdentity<boolean>(false));


// Generic Interface

// interface keyPair<T , U>{
// key: T;
// value: U;
// }
// let keyPairValue:keyPair <string, number> = {
//     key: 'pair',
//     value: 5
// };
// console.log(keyPairValue.key);


// Generic Constriants
// function getLength<T extends {length: number}>(item: T):number{
//     return item.length;
// }
// console.log(getLength('Ali Ahsan'));
// console.log(getLength([1, 2, 3]));

// Generic Classes

// class Box<T>{
//     contents:T;

//     constructor(value:T){
// this.contents = value;
//     }
//     getContents():T{
//         return this.contents;
//     }
// }
// const numberBox = new Box(100);
// console.log(numberBox.getContents());
// const stringBox = new Box('Ali Ahsan');
// console.log(stringBox.getContents());


// class Stack<T>{
//     private items: T[] = [];

//     push (item:T):void{
// this.items.push(item);
//     }
//     pop(): T | undefined{
//         return this.items.pop();
//     }
//     getStack(): T[]{
//         return this.items;
//     }
// }
// const numnberStack = new Stack<number>();
// numnberStack.push(10);
// numnberStack.push(20);
// console.log(numnberStack.getStack());
// numnberStack.pop();
// console.log(numnberStack.getStack());


