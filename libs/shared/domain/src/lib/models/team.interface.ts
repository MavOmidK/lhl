import {IPlayer} from './player.interface';

export interface ITeam {
  id: string;
  // Manager ID
  manager: string;
  // Team name
  name: string;
  // ID of players owned
  players: Array<string>
}
