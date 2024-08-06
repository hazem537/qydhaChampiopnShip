export interface ChampionShipCreate {
  name: string;
  logoUrl: string;
  halls: { name: string; number_of_tables: number; code: string }[];
  rules: string;
  prize: { place: string; money: number }[];
  start_at: string | Date;
  place: string;
  
  // location:string//with google maps
}
export enum Status  {
  IDEAL = 1,
  PLAYING,
  TEAM1WIN,
  TEAM2WIN,
  TEAMSLOSE
}
export interface ChampionChipI {
  id:number
  name: string;
  logoUrl: string;
  halls: {
    name: string;
    number_of_tables: number;
    code: string;
    tables: {
      id: string;
      team1: string;
      team2: string;
      officiant: string;
      status: Status;
    }[];
  }[];
  rules: string;
  prize: { place: string; money: number }[];
  start_at: string | Date;
  place: string;
  done: boolean;
}
