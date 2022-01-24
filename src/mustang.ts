import { Car } from "./cars";

export class Mustang extends Car {
  vin: number;

  constructor(country: string, vin: number) {
    super("Mustang");
    this.country = country;
    this.vin = vin;
  }

  public getInfo(): string {
    let mainInfo: string = super.getInfo();
    return `Car information: ${mainInfo}, ${this.country}, ${this.vin}`;
  }
}
