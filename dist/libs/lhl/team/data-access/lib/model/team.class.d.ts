import { ITeam } from "./team.interface";
export declare class Team implements ITeam {
    id: string;
    managerId: string;
    name: string;
    activeRoster?: Array<string>;
    prospectRoster?: Array<string>;
    constructor(team: ITeam);
}
