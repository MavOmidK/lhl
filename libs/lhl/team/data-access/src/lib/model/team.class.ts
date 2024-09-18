import { ITeam } from "./team.interface";

export class Team implements ITeam {
  id: string;
  managerId: string;
  name: string;
  activeRoster?: Array<string>;
  prospectRoster?: Array<string>;

  constructor(team: ITeam) {
    this.id = team.id;
    this.managerId = team.managerId;
    this.name = team.name;
  }
}