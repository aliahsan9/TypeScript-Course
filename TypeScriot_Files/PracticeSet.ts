// problem no. 01
// write a typescript code to calculate the factorial of any random number
// function factorial(num: number):number{
//     if(num == 0 || num == 1){
//         return 1;
//     }
//     return num * (num - 1);
// };
// console.log(factorial(3));


// problem no. 02
//define a function that accepte user name, age, and email and returns a formatted string
// interface UserData {
//     name: string,
//     age: number,
//     email: string,
// };
// function formattedString(user: UserData):string{
//     return (`User ${user.name} (${user.age}) has a gmail ${user.email}`);
// }
// const user:UserData = {
//     name: 'Ali Ahsan',
//     age: 18,
//     email: 'aliahsan@gmail.com',
// };
// console.log(formattedString(user));



// problem No. 03
// write a ts function to calculate the total price of the objects in an array
// interface product {
//     price: number,
//     quantity: number,
// };
// function totalPrice (products: product[]){
//     return products.reduce((total, product) => total + product.price * product.quantity, 0);
// }
// let cart: product[] = [
//     {price: 300, quantity: 2},
//     {price: 100, quantity: 2},
// ];
// console.log(totalPrice(cart));


//problem no. 04
// write a union type for a vehicle type such as car or bike with different properties. Write a function to log the details of that vehicle

// type carData = { 
//     type: 'car';
//     brand: string;
//     modelcar: string;
//     yearcar: number;
// };

// type bikeData = { 
//     type: 'bike';
//     name: string;
//     modelbike: string;
//     yearbike: number;
// };

// type vehicleData = carData | bikeData;

// function getVehicleDetails(vehicle: vehicleData): void {
//     if (vehicle.type === 'car') {
//         console.log(`Car: ${vehicle.brand}, ${vehicle.modelcar}, ${vehicle.yearcar}`);
//     } else if (vehicle.type === 'bike') {
//         console.log(`Bike: ${vehicle.name}, ${vehicle.modelbike}, ${vehicle.yearbike}`);
//     }
// }

// let myCarDetails: vehicleData = {
//     type: 'car',
//     brand: 'Honda Civic',
//     modelcar: 'Model 10',
//     yearcar: 2020,
// };

// let bikeDetails: vehicleData = {
//     type: 'bike',
//     name: 'CD',
//     modelbike: 'Model 12',
//     yearbike: 2024,
// };

// // Call the function
// getVehicleDetails(bikeDetails); // Logs the bike details
// getVehicleDetails(myCarDetails); // Logs the car details
