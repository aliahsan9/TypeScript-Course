/* Type Guards 
A type guard is some expression that performs 
a runtime check that guarantees the type in some scope.
typeof
instanceof
custom type guard fn
*/

// function printId(id: string | number){
//     if(typeof id === 'string'){
//         console.log(`id is a ${id}`);
//        } else{
//             console.log(`id is a ${id}`);
//         } 
//     }
//         class dog{
//             bark(){
//                   console.log('woof!');
//             }
//         }
//         class cat{
//             meo(){
//                 console.log('meo!');
                
//             }
   
// }
// function handlePet(pet: dog | cat){
//     if (pet instanceof dog) {
//     pet.bark();
//     }else{
//         pet.meo();
//     }
// }


// interface Fish {
//     swim():void;
// }
// interface Bird{
//     fly():void;
// }
// function isFish (pet: Fish | Bird): pet is Fish{
//     return (pet as Fish).swim !== undefined;
// }
// function move(pet: Fish | Bird){
//     if(isFish(pet)){
//    pet.swim();
//     }else{
//         pet.fly();
//     }
// }

// function isString(value: any):value is string{
//     return typeof value === 'string';
// }
// function checkType(value: string | number){
// if(isString(value)){
// console.log('Value is String');
// }else{
//     console.log('Value is Number');
    
// }
// }
// checkType('Ali Ahsan');