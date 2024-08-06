<template>
  <UForm
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    class="flex flex-col gap-3">
    <UFormGroup label="المستخدم" name="username" size="xl">
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="كلمة المرور" name="password" size="xl">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>
    <div>
      <UButton type="submit" size="xl" label="تسجيل الدخول " />
    </div>
  </UForm>
</template>

<script lang="ts" setup>
import { object, string } from "yup";
import { useMyAuthStore } from "~/store/auth";
const toast = useToast();
const schema = object({
  username: string().required("اسم المستخدم مطلوب"),
  password: string().required("كلمة المرور مطلوب"),
});
const state = reactive<{ username: string; password: string }>({
  username: "",
  password: "",
});
// const authStore = useMyAuthStore();
const loginREQ = await useAuth().Login();
const onSubmit = async () => {
  await loginREQ.fetchREQ(state.username, state.password);
  if (loginREQ.status.value == "success") {
    toast.add({ title: " login  is ok " });
    return navigateTo("/championship");
  } else if (loginREQ.status.value == "error") {
    toast.add({ title: " has error in login  " });
  }
};
</script>

<style></style>
