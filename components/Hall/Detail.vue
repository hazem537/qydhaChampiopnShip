<template>
  <UCard v-if="selected_hall">
    <div class="flex flex-col  gap-5">
    <div class="flex gap-5">

      <h1> {{ selected_hall.name }}</h1>
      <h1> {{ selected_hall.code }}</h1>
      <h1> {{ selected_hall.number_of_tables }}</h1>
</div> 
       <div class="flex flex-wrap gap-5  ">
        <TableSingle v-for="table of selected_hall.tables " :table="table" />  
        </div>


    </div>
    <template #footer>
      <UButton label="back" @click="onBack" />
    </template>
  </UCard>
</template>

<script lang="ts" setup>


import { useMyChampionStore } from "~/store/champion";

const props = defineProps<{ id: number; hall_code: string }>();
const championStore = useMyChampionStore();

const  selected_hall  =championStore.get_hall(props.id,props.hall_code)
if (selected_hall){


}else{
  navigateTo(`/championship/${props.id}`)
}
const onBack = () => {
  return navigateTo(`/championship/${props.id}`);
};
</script>

<style></style>
