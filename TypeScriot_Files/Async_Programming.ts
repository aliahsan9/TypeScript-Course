// sync programming
// function func1 (){
//     console.log('task1');
    
// }
// function func2(){
//     console.log('task2');
    
// }
// func1();
// func2();

// // async programming
// function func12(){
//     setTimeout(() => {
//         console.log('task12');
        
//     }, 2000);
// }
// function func22(){
// console.log('task22');

// }
// func12();
// func22();

//promises
const fetchData = (value:any): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value){
                 resolve('Data fetched successfully...');
                }else{
                    reject('error found!');
                }
           
        }, 2000);
    });
};
fetchData(true)
.then((data) =>{
console.log('success', data);
})
.catch((error)=> {
console.log('failure', error);

});