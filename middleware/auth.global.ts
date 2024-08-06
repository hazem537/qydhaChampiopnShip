import { useMyAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
const authStore =useMyAuthStore()
if (to.path=="/"){
    if(authStore.is_auth){
        return navigateTo("/championship")
    }
}
if (to.path!=="/"){
    if(! authStore.is_auth){
        // await logout()
        return navigateTo("/")
    }
}

})
