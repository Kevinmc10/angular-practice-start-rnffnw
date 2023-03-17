const username: string  = "nicobytes";
const sum =(a: number , b: number) => {
  return a + b ;
}
sum(1,3);

export class persona {

  constructor(public age: number, public lastname: string) {
  }
}

const nico = new persona(13, "kevin");
nico.lastname;
