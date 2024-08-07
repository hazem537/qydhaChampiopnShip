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

    const get_champion =  (id: number) => {
      if (championsShips.value.length > id) {
        return championsShips.value[id];
      } else {
        return null;
      }
    };
    const get_hall = computed(()=>{
     return  (id: number, code: string) => {
        const champion = get_champion(id);
        if (champion) {
          const halls = champion.halls;
          const hall = halls.find(hall=>{return hall.code ==code}) 
          return hall
        }else{
          return null
        }
      };
    }) 
    const update_table=(id: number, code: string,table_id:string,new_status:number)=>{
      for(const hall of  championsShips.value[id].halls){
      if (hall.code ==code ){
        for(const table of hall.tables){
          if (table.id == table_id){
            table.status =new_status
          }
      }
        
      }

    }

    }
    return { addChampionShip, get_champion, championsShips, get_hall,update_table , };
  },
  { persist: true }
);
