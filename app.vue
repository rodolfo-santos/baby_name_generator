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

const selectedNames = ref<String[]>([]);

const computeSelectedNames = () => {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === ELength.ALL) return true;
      return name.length === options.length;
    });

  selectedNames.value = filteredNames.map((name) => name.name);
};
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.gender === EGender.BOY && 'option-active'"
            @click="options.gender = EGender.BOY">
            Boy
          </button>
          <button
            class="option"
            :class="options.gender === EGender.UNISEX && 'option-active'"
            @click="options.gender = EGender.UNISEX">
            Unisex
          </button>
          <button
            class="option option-right"
            :class="options.gender === EGender.GIRL && 'option-active'"
            @click="options.gender = EGender.GIRL">
            Girl
          </button>
        </div>
      </div>

      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.popularity === EPopularity.TRENDY && 'option-active'"
            @click="options.popularity = EPopularity.TRENDY">
            Trendy
          </button>
          <button
            class="option option-right"
            :class="options.popularity === EPopularity.UNIQUE && 'option-active'"
            @click="options.popularity = EPopularity.UNIQUE">
            Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose the name's length</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.length === ELength.LONG && 'option-active'"
            @click="options.length = ELength.LONG">
            Long
          </button>
          <button class="option" :class="options.length === ELength.ALL && 'option-active'" @click="options.length = ELength.ALL">
            All
          </button>
          <button
            class="option option-right"
            :class="options.length === ELength.SHORT && 'option-active'"
            @click="options.length = ELength.SHORT">
            Short
          </button>
        </div>
      </div>
      <button class="primary" @click="computeSelectedNames">Find Names</button>
      <div class="cards-container">
        <h4 v-for="name in selectedNames" class="card">
          {{ name }}
        </h4>
        <p></p>
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

.option-container {
  margin-bottom: 2rem;
}

.option {
  background-color: #fff;
  outline: 0.15rem solid #f95759;
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: #1b3c8a;
  font-weight: bold;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background: #f95759;
  color: #fff;
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

.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card {
  min-width: 32.28%;
  background: #1b3c8a;
  color: #fff;
  border-radius: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding: 1.5rem 0;
}

.card p {
  position: absolute;
  top: -30%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178);
}
</style>
