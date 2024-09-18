export interface ITeam {
    id: string;
    managerId: string;
    name: string;
    activeRoster?: Array<string>;
    prospectRoster?: Array<string>;
}
