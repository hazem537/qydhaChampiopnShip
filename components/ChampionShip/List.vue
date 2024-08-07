<template>
  <UCard>
    <UTable
      :rows="championships"
      :columns="cols"
      @select="onSelect">
      <template #name-data="{ row }">
        <!-- <div class="flex items-center gap-5"> -->
        <!-- <UAvatar :src="row.logo" size="xl" /> -->
        <h2>{{ row.name }}</h2>
        <!-- </div> -->
      </template>
      <!-- <template #location-data="{ row }">

        {{ row.place }}
      </template> -->
      <template #start_at-data="{ row }">
        {{ new Date(row.start_at).toLocaleDateString() }}
      </template>
      <template #done-data="{ row }">
        {{ row.done ? " ended" : " running" }}
      </template>
    </UTable>
    <template #footer>
      <UButton
        label="Add Championship "
        @click="navigateTo('/championship/add')" />
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import { useMyChampionStore } from "~/store/champion";

const championsStore = useMyChampionStore();
const championships = computed(() => {
  return championsStore.championsShips;
});
const cols = [
  { label: "name", key: "name" },
  { label: "place", key: "place" },
  { label: "start_at", key: "start_at" },
  { label: "status", key: "done" },
];
const onSelect = (row: any) => {
  return navigateTo(`/championship/${row.id}`);
};
</script>

<style></style>
