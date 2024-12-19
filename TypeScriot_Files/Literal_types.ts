/* Literal types 
There are three sets of literal types available in TypeScript today: strings, 
numbers, and booleans; by using literal types you can allow an exact value which
 a string, number, or boolean must have.
*/

// string Literal
// type orderStatus = 'pending' | 'delivered' | 'cancelled';
// let order:orderStatus = 'delivered';

// let answer: 'yes' | 'No';
// answer = 'No';

// // Number Literal
// let count: 0 | 1;
// count = 0;

// // Boolean Literal
// let isVisible: true | false;
// isVisible = true;

// function Literal
// function currentStatus(status: 'success' | 'error' | 'loading'){
// console.log(`Current Status is ${status}`);
// }
// currentStatus('loading');


// interface config {
//     size: 'small' | 'medium' |  'large';
//     color: 'red' | 'blue' | 'green';
// }
// const button:config = {
//     size: 'medium',
//     color:'blue',
// };