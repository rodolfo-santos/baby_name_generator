<script lang="ts" setup>
import { EGender, EPopularity, ELength } from '@/data';

interface IProps {
  option: {
    title: string;
    category: string;
    buttons: EGender[] | EPopularity[] | ELength[];
  };

  options: {
    gender: EGender;
    popularity: EPopularity;
    length: ELength;
  };
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="option-container">
    <h4>{{ props.option.title }}</h4>
    <div class="option-buttons">
      <button
        v-for="button in props.option.buttons"
        class="option"
        :key="button"
        :class="options[props.option.category] === button && 'option-active'"
        @click="options[props.option.category] = button">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<style>
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

.option:first-child {
  border-radius: 1rem 0 0 1rem;
}

.option:last-child {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background: #f95759;
  color: #fff;
}
</style>
