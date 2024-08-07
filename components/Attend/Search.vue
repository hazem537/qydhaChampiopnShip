<template>
  <div>
    <div class="flex flex-start gap-5">
      <UFormGroup class="grow">
        <UInput
          v-model="query"
          placeholder="search with name or email or phone number"
          @keyup.enter="onClick()" />
      </UFormGroup>
      <UButton
        label="search"
        @click="onClick()"
        :loading="searchREQ.status.value == 'pending'" />
    </div>
    <div class="h-[200px] overflow-auto">
      <UTable
      :columns="cols"
        :rows="result"
        :loading="searchREQ.status.value == 'pending'"
        @select="select" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { User, UserI } from "~/models/Uesr";
import { useMyAttendStore } from "~/store/attend";

// const props = defineProps<{ champion_id: string }>();
const query = ref<string>();
const searchREQ = await useUser().searchUser();
const onClick = async () => {
  if (query.value) {
    await searchREQ.fetchREQ(query.value);
  }
};
const result = computed(() => {
  return searchREQ.data.value?.data.users.items;
});
const AttendStore = useMyAttendStore();
const select = (row: UserI) => {
  AttendStore.updateUser(row);
};
const onReset = () => {
  AttendStore.resetUser();
};
const cols= [{key:"username",label:"username"},{key:"phone",label:"phone"}]
</script>

<style></style>
