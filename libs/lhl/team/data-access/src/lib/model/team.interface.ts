export interface ITeam {
  id: string;
  // Manager ID
  managerId: string;
  // Team name
  name: string;
  // ID of players owned
  players: Array<string>
}
