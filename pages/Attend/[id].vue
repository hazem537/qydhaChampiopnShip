<template>
  <div>
    <Attend :champion_id="route.params.id as string "   />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style>

</style>