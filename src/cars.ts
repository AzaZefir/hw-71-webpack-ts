export abstract class Car {
  protected country: string;

  constructor(private brand: string) {}

  public getInfo(): string {
    return this.brand;
  }
}
