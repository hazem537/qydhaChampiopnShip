<template>
  <div>
    <!-- active champion :{{ champion_id }} -->
    <div calss="flex gap-5">
      <UFormGroup>
        <UInput
          v-model="query"
          placeholder="search with name or email or phone number"
          @keyup.enter="onClick()" />
      </UFormGroup>
      <UButton label="search" @click="onClick()" />
      <!-- start result  -->
       
      <!-- end result  -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ champion_id: string }>();
const query = ref<string>();
const searchREQ = await useUser().searchUser();
const onClick = async () => {
  if (query.value) {
    await searchREQ.fetchREQ(query.value);
  }
};
</script>

<style></style>
