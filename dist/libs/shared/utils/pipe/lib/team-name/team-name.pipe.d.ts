import { PipeTransform } from '@angular/core';
import { TeamService } from '@lhl/team/data-access';
import * as i0 from "@angular/core";
export declare class TeamNamePipe implements PipeTransform {
    private teamService;
    constructor(teamService: TeamService);
    transform(teamId: string): Promise<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TeamNamePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TeamNamePipe, "teamName", true>;
}
