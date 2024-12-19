//namespace
namespace Geomatry {
    export const PI = 3.14;

    export class calc {
        area(width: number, height:number):number{
     return width * height;
        }
    }

    export function calc_area(radius: number):number{
        return Math.PI * radius * radius;
    }
}
console.log(Geomatry.PI);
console.log(Geomatry.calc_area(5));
const calc = new Geomatry.calc();
console.log(calc.area(3, 4));


//nested namespace
namespace Shape12 {
    export namespace Circle{
        export const PI = 3.14;
    }
}
console.log(Shape12.Circle.PI);
    