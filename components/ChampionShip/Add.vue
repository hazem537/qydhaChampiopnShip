<template>
  <UForm
    :schema="schema"
    :state="state"
    @submit="onSubmit"
    class="flex flex-col grow">
    <UCard>
      <div class="flex flex-col gap-15">
        <div class="grid grid-cols-3 gap-4 items-center">
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>

          <UFormGroup label="logo" name="logoUrl">
            <UInput
              v-model="state.logoUrl"
              ref="logo"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              @change="onChange" />
          </UFormGroup>

          <UPopover>
            <UButton>show image</UButton>
            <template #panel>
              <div class="p-4">
                <img
                  v-show="logo_url"
                  :src="logo_url"
                  size="xl"
                  class=" rounded-xl  w-[200px] " />
              </div>
            </template>
          </UPopover>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <VDatePicker v-model="state.start_at" :is-dark="true">
            <template #default="{ inputValue, inputEvents }">
              <UFormGroup label="start_at" name="start_at">
                <UInput :value="inputValue" v-on="inputEvents" />
              </UFormGroup>
            </template>
          </VDatePicker>
          <!-- <UFormGroup label="start_at" name="start_at">
            <UInput v-model="state.start_at" />
          </UFormGroup> -->

          <UFormGroup label="Place" name="place">
            <UInput v-model="state.place" />
          </UFormGroup>
          <UFormGroup label="Rules" name="rules">
            <UInput v-model="state.rules" />
          </UFormGroup>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col gap-3 p-5">
          <div>
            <UButton
              label="Add hall "
              @click="
                state.halls.push({ name: '', number_of_tables: 0, code: '' })
              " />
          </div>
          <div class="h-[200px] overflow-auto">
            <div v-for="(hall, index) of state.halls">
              <div class="flex gap-5">
                <UFormGroup
                  label="Hall name"
                  :name="'halls[' + index + '].name'">
                  <UInput v-model="hall.name" />
                </UFormGroup>
                <UFormGroup
                  label=" number of table"
                  :name="'halls[' + index + '].number_of_tables'">
                  <UInput v-model="hall.number_of_tables" />
                </UFormGroup>
                <UFormGroup
                  label="Hall code"
                  :name="'halls[' + index + '].code'">
                  <UInput v-model="hall.code" />
                </UFormGroup>
                <div class="self-center">
                  <UButton
                    icon="i-mdi-delete"
                    v-if="index > 0"
                    @click="state.halls.splice(index, 1)" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 p-5">
          <div>
            <UButton
              label="Add prize "
              @click="state.prize.push({ place: '', money: 0 })" />
          </div>
          <div class="h-[200px] overflow-auto">
            <div v-for="(prize, index) of state.prize">
              <div class="flex gap-5">
                <UFormGroup label="place" :name="'prize[' + index + '].place'">
                  <UInput v-model="prize.place" />
                </UFormGroup>
                <UFormGroup label=" money" :name="'prize[' + index + '].money'">
                  <UInput v-model="prize.money" />
                </UFormGroup>
                <div class="self-center">
                  <UButton
                    icon="i-mdi-delete"
                    v-if="index > 0"
                    @click="state.prize.splice(index, 1)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <UButton type="submit"> Submit </UButton>
      </template>
    </UCard>
  </UForm>
</template>

<script setup lang="ts">
import { object, string, array, number } from "yup";
import type { ChampionShipCreate } from "~/models/championship";
import { useMyChampionStore } from "~/store/champion";
const logo = ref();
const logo_url = ref();

const schema = object({
  name: string().required("the name is required"),
  logoUrl: string().required("logo of championship is requied"),
  halls: array().of(
    object({
      name: string().required("name pls"),
      number_of_tables: number().required("tables number"),
      code: string().required("code pls"),
    })
  ),
  rules: string().required(),
  prize: array().of(
    object({
      place: string().required("place pls"),
      money: number().required("money pls"),
    })
  ),
  start_at: string().required(),
  place: string().required(),
});

const state = reactive<ChampionShipCreate>({
  name: "",
  logoUrl: "",
  halls: [{ name: "", number_of_tables: 10, code: "" }],
  rules: "",
  prize: [{ place: "", money: 0 }],
  start_at: new Date(),
  place: "",
 
});
// prize: { place: string; money: number }[];
//   start_at: string;
//   place:string
const championStore = useMyChampionStore();
const onSubmit = () => {
  championStore.addChampionShip(state);
  return navigateTo("/championship");
};
const onChange = async () => {
  const image_input = logo.value.input as HTMLInputElement;
  if (image_input.files && image_input.files.length > 0) {
    const imageFile = image_input.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      logo_url.value = reader.result;
    };
    reader.readAsDataURL(imageFile);
  } else {
    logo_url.value = "";
  }
};
</script>
