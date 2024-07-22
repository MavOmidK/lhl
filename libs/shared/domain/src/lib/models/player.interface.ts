export interface IPlayer {
  id: string;
  firstName: string;
  lastName: string;
  // ID of owner or undefined
  owner: string;
  age: number;
}
