import { Bmw } from "./bmw";
import { Car } from "./cars";
import { Nexia } from "./nexia";
import { Mustang } from "./mustang";

let cars: Car[] = [];

cars.push(new Bmw("Kg", "Lorry"));
cars.push(new Nexia("Germany", new Date("1985-01-01")));
cars.push(new Mustang("USA", 7987897983987));
cars.push(new Bmw("Japan", "Sedan"));
cars.push(new Nexia("Poland", new Date("1991-01-01")));
cars.push(new Mustang("France", 898098));

for (let i = 0; i < cars.length; ++i) {
  console.log(cars[i].getInfo());
}
