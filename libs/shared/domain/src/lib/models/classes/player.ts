import { IPlayer } from "../interfaces/player.interface";

export class Player implements IPlayer {
    id: string;
    name: string;
    nhlTeamAbbrev: string;
    position: string;

    constructor(player: IPlayer) {
        this.id = player.id;
        this.name = player.name;
        this.nhlTeamAbbrev = player.nhlTeamAbbrev;
        this.position = player.position
    }
}