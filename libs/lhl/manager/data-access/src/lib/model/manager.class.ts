export class Manager {
    id: string;
    teamId?: string;
    email: string;
    name: string;
    active: boolean;
    admin: boolean;

    constructor(id: string, teamId: string, email: string, name: string, active: boolean, admin: boolean) {
        this.id = id;
        this.teamId = teamId; 
        this.email = email;
        this.name = name;
        this.active = active;
        this.admin = admin;
    }
}