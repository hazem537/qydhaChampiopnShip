<template>
  <div class="flex flex-col ">
    <HallDetail :id="id" :hall_code="hall_code" />
  </div> 
</template>

<script lang="ts" setup>
const route = useRoute()
const id = +(route.params.id as string)
const hall_code = route.params.code as string
</script>

<style>

</style>