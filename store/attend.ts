import { defineStore } from 'pinia'
import type { User, UserI } from '~/models/Uesr'

export const useMyAttendStore = defineStore('myAttendStore',()=>{
const _user  = ref<UserI|null>()
const user =computed(()=>{
  return _user.value
})
const updateUser =(new_user:UserI)=>{
  _user.value = new_user
}
const resetUser =()=>{
  _user.value =null
}
return {user,updateUser,resetUser}

})
