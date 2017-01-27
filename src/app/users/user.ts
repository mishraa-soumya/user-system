// export class User {
//    constructor (
//      public id: number,
//      public name: string,
//      public salary: string,
//     ) {}
// }

export interface  User {
  name: string;
  addresses: Address[];
}

export interface Address {
  street: string;
  postcode: string;
}
