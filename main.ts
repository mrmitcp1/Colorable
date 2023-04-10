import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Square} from "./square";

let circle = new Circle('tron',10);
let rectangle = new Rectangle(10   ,5,'chu nhat');
let square = new Square('vuong',20);
let arr = [circle,rectangle,square]
arr.forEach(item=>{
    console.log(`area of ${item.calculateArea()}`);
    if (item instanceof Square){
    item.howToColor()
    }
})