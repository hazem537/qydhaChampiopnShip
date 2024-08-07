<template>
  <div
    class="flex flex-col gap-1 p-1 border border-primary/50 rounded-xl items-center grow"
    :class="{'bg-gray-500':table.status ==1 ,'bg-green-500':table.status ==2 ,'bg-red-500':table.status ==3 ,'bg-blue-500':table.status ==4 ,'bg-black':table.status ==5 ,}"
    >
    <div class="flex gap-1">
      <UDropdown :items="items" >
        <UButton color="white" icon="material-symbols:edit" size="xs" />
      </UDropdown>
      <h1 class="font-bold">{{ table.id }}</h1>
    </div>
    <div class="flex gap-1">
      <UBadge color="red" class="font-bold">{{ table.team1 }}</UBadge>

      <h1>VS</h1>
      <UBadge color="blue" class="font-bold">{{ table.team2 }}</UBadge>
    </div>
    <UBadge color="orange" class="font-bold"> {{ table.officiant }}</UBadge>
  </div>
</template>

<script lang="ts" setup>
import type { Status } from "~/models/championship";
import { useMyChampionStore } from "~/store/champion";
const championshipSTore  =useMyChampionStore()
const route = useRoute();
// console.log(route.params.id);
// console.log(route.params.code);
const props = defineProps<{
  table: {
    id: string;
    team1: string;
    team2: string;
    officiant: string;
    status: Status;
  };
}>();

const items = [
  [
    {
      label: "Start Playing",
      icon: "i-heroicons-play-20-solid",
      iconClass:"text-green-500 dark:text-green-500 ",
      click: () => {
        championshipSTore.update_table(+route.params.id ,route.params.code as string ,props.table.id ,2 )
      },
    },
  ],
  [
    {
      label: "Team 1 Win",
      icon: "i-heroicons-trophy-20-solid",
      iconClass:"text-red-500 dark:text-red-500",
      click: () => {
        championshipSTore.update_table(+route.params.id ,route.params.code as string ,props.table.id ,3 )

      },
    },
    {
      label: "Team 2 Win",
      icon: "i-heroicons-trophy-20-solid",
      iconClass:"text-blue-500 dark:text-blue-500",
      click: () => {
        championshipSTore.update_table(+route.params.id ,route.params.code as string ,props.table.id ,4 )

      },
    },
  ],
  [
  {
      label: "two Team Lose",
      icon: "material-symbols:close",
      click: () => {
        championshipSTore.update_table(+route.params.id ,route.params.code as string ,props.table.id ,5 )

      },
    },

  ]
];




</script>

<style></style>
