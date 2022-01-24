import { Car } from "./cars";



export class Bmw extends Car {
    type: string;
    
    constructor(country: string, type: string) {
    super('Bmw');
    this.country = country;
    this.type = type;
    }
    
    public getInfo () : string {
    let mainInfo: string = super.getInfo();
    return `Car information: ${mainInfo}, ${this.country}, ${this.type}`;
    }
    }