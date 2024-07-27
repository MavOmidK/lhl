export interface SearchPlayerRequest {
    region: string;
    limit: number;
    name: string;
    active: boolean;
}