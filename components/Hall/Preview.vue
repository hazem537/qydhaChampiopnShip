<template>
  <UCard>
    <div>
  
      
    </div>
    <template #footer>
      <UButton label="back" @click="onBack"/>
    </template>
  </UCard>
</template>

<script lang="ts" setup>

const props =defineProps<{id:number ,hall_code:string }>()
const onBack = ()=>{
  return navigateTo(`/cahmpionship/${props.id}`)
}
</script>

<style>

</style>  