<template>
  <UCard v-if="selected_champion">
    <div class="flex gap-5">
      <img
        :src="selected_champion.logoUrl"
        class="w-[200px] h[200px] rounded-xl" />
      <div class="flex flex-col gap-5">
        <h1>{{ selected_champion.name }}</h1>
        <h2>{{ new Date(selected_champion.start_at).toLocaleDateString() }}</h2>
        <h2>{{ selected_champion.place }}</h2>
        <h2>{{ selected_champion.done ? "ended" : "running" }}</h2>
        
      </div>
    </div>
    <UTabs :items="items" class="w-full">
          <template #prize="{item}">
            <div v-for="prize of selected_champion.prize">
              <h2>{{ prize.place }} --> {{ prize.money }}</h2>
            </div>

          </template>
          <template #halls="{item}">
            <div class="flex flex-col gap-2">
              <div v-for="hall of selected_champion.halls ">
              <div class="flex  gap-5 ">
                <p>{{ hall.name }}</p>
                <p>{{ hall.code }}</p>
                <p>{{ hall.number_of_tables }}</p>
                <UButton label="go to hall " @click="GotoHall(hall.code)" />

              </div> 
            </div>
           </div>
          </template>
        </UTabs>
    <template #footer>
      <UButton label="back" @click="onBack()" />
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import type { ChampionChipI } from "~/models/championship";
import { useMyChampionStore } from "~/store/champion";
const props = defineProps<{ id: number }>();
const championshipStore = useMyChampionStore();
const selected_champion = ref<ChampionChipI>();
const champion = championshipStore.get_champion(props.id);
if (champion) {
  selected_champion.value = champion;
} else {
  navigateTo("/championship");
}
const onBack = () => {
  return navigateTo("/championship");
};
const items = [{
  slot: 'prize',
  label: 'Prize'
}, {
  slot: 'halls',
  label: 'Halls'
}]
const GotoHall =(hall_code:string )=>{
return navigateTo(`/champion/${props.id}/hall/${hall_code}`)
}
</script>

<style></style>
