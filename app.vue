<script lang="ts" setup>
type TGender = 'Girl' | 'Boy' | 'Unisex';
type TPopularity = 'Trendy' | 'Unique';
type TLength = 'Long' | 'All' | 'Short';

interface IOptions {
  gender: TGender;
  popularity: TPopularity;
  length: TLength;
}

const options = reactive<IOptions>({
  gender: 'Girl',
  popularity: 'Unique',
  length: 'Short'
});
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button class="option option-left" :class="options.gender === 'Boy' && 'option-active'" @click="options.gender = 'Boy'">
            Boy
          </button>
          <button class="option" :class="options.gender === 'Unisex' && 'option-active'" @click="options.gender = 'Unisex'">
            Unisex
          </button>
          <button
            class="option option-right"
            :class="options.gender === 'Girl' && 'option-active'"
            @click="options.gender = 'Girl'">
            Girl
          </button>
        </div>
      </div>

      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.popularity === 'Trendy' && 'option-active'"
            @click="options.popularity = 'Trendy'">
            Trendy
          </button>
          <button
            class="option option-right"
            :class="options.popularity === 'Unique' && 'option-active'"
            @click="options.popularity = 'Unique'">
            Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose the name's length</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.length === 'Long' && 'option-active'"
            @click="options.length = 'Long'">
            Long
          </button>
          <button class="option" :class="options.length === 'All' && 'option-active'" @click="options.length = 'All'">All</button>
          <button
            class="option option-right"
            :class="options.length === 'Short' && 'option-active'"
            @click="options.length = 'Short'">
            Short
          </button>
        </div>
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
</style>
