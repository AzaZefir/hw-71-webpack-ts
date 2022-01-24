import { Car } from "./cars";


export class Nexia extends Car {
    year: number;
    
    constructor (country: string, year: Date) {
    super('Nexia');
    this.country = country;
    this.year = year.getFullYear();
    }
    
    public getInfo () : string {
    let mainInfo: string = super.getInfo();
    return `Car information: ${mainInfo}, ${this.country}, ${this.year}`;
    }
    }