import type { ChampionChipI } from "../models/championship";

export const useChampionship = () => {
  const { $api } = useNuxtApp();

  const getAllChhampionShip = async () => {
    const { data, pending, error, refresh, status } = await useAsyncData<{
      data: ChampionChipI[];
      message: string;
    }>("getAllChhampionShip ", () => $api("all/champion"));
    return { data, pending, error, refresh, status };
  };
  const getChhampionShipByID = async (id: string) => {
    const { data, pending, error, refresh } = await useAsyncData(
      "getChhampionShipByID ",
      () => $api(`/championship/id${id}`)
    );
    return { data, pending, error, refresh };
  };

  return { getAllChhampionShip, getChhampionShipByID };
};
