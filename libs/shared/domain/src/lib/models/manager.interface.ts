export interface IManager {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  // If the manager is currently in the league
  active: boolean;
}
