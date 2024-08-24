import { Injectable } from "@angular/core";
import { NhlService } from "@lhl/shared-services-nhl";
import { Player } from "@lhl/shared/domain";

@Injectable()
export class PlayerCardPresenter {
    private _player!: Player
    private _loading = false;

    constructor(private nhlService: NhlService) {}

    public get player(): Player {
        return this._player;
    }
    public set player(value: Player) {
        if(value) {
            this._player = value;
            this._loading = true;
        }
    }

    get imgAlt(): string {
        return `Headshot of ${this.player.name}`;
    }   

    get loading(): boolean {
        return this._loading;
    }   

    get name(): string {
        return this.player.name;
    }

    get position(): string {
        return this.player.position;
    }

    get teamAbbrev(): string {
        return this.player.nhlTeamAbbrev;
    }    
}