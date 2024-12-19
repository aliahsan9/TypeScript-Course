// /Key Operators
interface person {
    name: string;
    age:number;
    email: string;
}
type personKeys = keyof person;
let keys: personKeys = 'name';