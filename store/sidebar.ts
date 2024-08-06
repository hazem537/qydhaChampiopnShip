import { defineStore } from 'pinia'

export const useMySidebarStore = defineStore('mySidebarStore',()=>{
  const _status = ref<boolean>(true)
  const status = computed(()=>{
    return _status.value
  })
  const open = ()=>{
    _status.value=true
  }
  const close = ()=>{
    _status.value=false
  }
  const toogle = ()=>{
    _status.value= ! _status.value
  }

  return {status ,open ,close ,toogle}
})
