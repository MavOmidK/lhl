export interface IManager {
  id: string;
  teamId: string;
  email: string;
  name: string;
  // If the manager is currently in the league
  active: boolean;
  // If the manager is a commissioner of the league
  admin: boolean;
}
