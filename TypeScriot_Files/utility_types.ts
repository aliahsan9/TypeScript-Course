// /*Utility Types 
//  TypeScript utility types are prebuilt functions that transform existing types, making your code cleaner and easier to maintain.
// */

// interface UserRecord{
//     name: string;
//     age: number;
//     email: string;
// }
// //partial
// const UpdateUser = (user: Partial<UserRecord>) => {
//     console.log(user);
    
// }
// UpdateUser({name: 'Ali As=hsan'});
// UpdateUser({age: 18});
// UpdateUser({email: 'aliahsan8751@gmail.com'});

// //Required
// type User123 = Required<UserRecord>;
// let User1234: User123 = {
//     name: 'Aslam',
//     age: 19,
//     email: 'Aalam@gmail.com',
// };

// //Readonly
// type usr = readonly<UserRecord>;
// let usr123: usr = {
//     name: 'Ahmad',
//     age: 20,
//     email: 'ahmad@gmail.com',
// };
// // usr123.age = 34;

// //Pick
// type UserInfo = Pick<UserRecord, 'name' | 'age'>;
// const userInfo: UserInfo = {
//     name: 'Anwar',
//     age: 23,
// }


// //Omit
// type UserWithoutEmail = Omit<UserRecord, 'email'>;
// const UserOmitInfo: UserWithoutEmail = {
//     name: 'Zaib',
//     age: 77,
//     // email: 'zaib@gmail.com',
// }


// // Record

// type UserRecordInfo = Record<string, number>;
// const UserRecorsInfoMaterial: UserRecordInfo = {
//     name: 12,
//     age: 34,
//      email: 3333,
// // };


// type Role = 'admin' | 'user' |'guest';

// const UserRoles = {
//     name:'aaa',
//     age: 33,
//     emial: '3232dcd.com',
// };
// console.log(UserRoles.age);



// type stat = 'succes' | 'error' | 'loading';
// //Exclude
// type ExcludeError = Exclude<stat, 'error'>;
// const stat1: ExcludeError = 'succes';
// const stat2: ExcludeError = 'loading';

// //Extract
// type ExtractError = Extract<stat, 'error' | 'loading'>;
// const statE: ExcludeError = 'error';


//NoNnulable

// type MayBeUser = null | never | undefined;
// type UserNull = NonNullable<MayBeUser>;

// const userNull: UserNull = 'Omer';


//Return Type

// function getType(){
//     return {name: 'Ali', age: 18};
// }
// type UserReturnType = ReturnType<typeof getType>;

// const UserReturnTypeDetails: UserReturnType = {
//     name: 'akmal',
//     age: 23,
// };

//Parameters

// function UpdataUserData (name: string, age: number){
//     console.log(`${name}, ${age}`);
    
// }
// type UserDataUpdating = Parameters<typeof UpdataUserData>;

// const userDataRemains: UserDataUpdating = ['Akmal', 30];



//Constructor Parameters

// class UserData{
// constructor(public name: string, public age?: number) {
// }
// }
// type UserConstructorParameters = ConstructorParameters<typeof UserData>;

// const userData:UserConstructorParameters = ['Ali'];