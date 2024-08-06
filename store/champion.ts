import { defineStore } from "pinia";
import {
  Status,
  type ChampionChipI,
  type ChampionShipCreate,
} from "~/models/championship";

export const useMyChampionStore = defineStore(
  "myChampionStore",
  () => {
    const championsShips = ref<ChampionChipI[]>([]);

    const addChampionShip = (new_championShip: ChampionShipCreate) => {
      const champion: ChampionChipI = {
        id: championsShips.value.length,
        name: new_championShip.name,
        logoUrl: new_championShip.logoUrl,
        halls: new_championShip.halls.map((hall) => ({
          ...hall,
          tables: Array.from({ length: hall.number_of_tables }, (_, index) => ({
            id: `${hall.code}${index + 1}`,
            team1: "team1",
            team2: "team2",
            officiant: "officiant",
            status: Status.IDEAL,
          })),
        })),
        rules: new_championShip.rules,
        prize: new_championShip.prize,
        start_at: new_championShip.start_at,
        place: new_championShip.place,
        done: false,
      };

      championsShips.value.push(champion);
    };

    const get_champion =(id:number)=>{
      if (championsShips.value.length >id){

        return championsShips.value[id]
      }else{
        return null
      }
    }


    return { addChampionShip,get_champion ,  championsShips };
  },
  { persist: true }
);
