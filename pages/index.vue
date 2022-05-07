<script lang="ts" setup>
import { EGender, EPopularity, ELength, names } from '@/data';

interface IOptions {
  gender: EGender;
  popularity: EPopularity;
  length: ELength;
}

const options = reactive<IOptions>({
  gender: EGender.GIRL,
  popularity: EPopularity.TRENDY,
  length: ELength.ALL
});

const optionsArray = [
  {
    category: 'gender',
    title: '1) Choose a gender',
    buttons: [EGender.GIRL, EGender.UNISEX, EGender.BOY]
  },
  {
    category: 'popularity',
    title: "2) Choose the name's popularity",
    buttons: [EPopularity.TRENDY, EPopularity.UNIQUE]
  },
  {
    category: 'length',
    title: "3) Choose the name's length",
    buttons: [ELength.LONG, ELength.ALL, ELength.SHORT]
  }
];

const selectedNames = ref<string[]>([]);

function computeSelectedNames() {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === ELength.ALL) return true;
      return name.length === options.length;
    });

  selectedNames.value = filteredNames.map((name) => name.name);
}

function removeName(index: number) {
  const filteredNames = [...selectedNames.value];
  filteredNames.splice(index, 1);
  selectedNames.value = filteredNames;
}
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>
    <div class="options-container">
      <Option v-for="option in optionsArray" :key="option.category" :option="option" :options="options" />
      <button class="primary" @click="computeSelectedNames">Find Names</button>
      <div class="cards-container">
        <CardName
          v-for="(name, index) in selectedNames"
          :key="name"
          :name="name"
          :index="index"
          @remove="() => removeName(index)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: #1b3c8a;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: #fff8ec;
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
}

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.primary {
  background-color: #f95759;
  color: #fff;
  border-radius: 6.5rem;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border: 0;
}
</style>
