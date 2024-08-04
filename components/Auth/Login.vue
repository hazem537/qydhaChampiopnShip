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
const schema = object({
  username: string().required("اسم المستخدم مطلوب"),
  password: string().required("كلمة المرور مطلوب"),
});
const state = reactive<{ username: string; password: string }>({
  username: "",
  password: "",
});
const onSubmit = () => {
  console.log(state);
};
</script>

<style></style>
