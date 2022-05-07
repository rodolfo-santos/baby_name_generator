<script lang="ts" setup>
interface IProps {
  name: string;
  index: number;
}

const props = defineProps<IProps>();
const emit = defineEmits(['remove']);

function removeName() {
  emit('remove', props.index);
}
</script>

<template>
  <div class="card">
    <h4>
      {{ props.name }}
    </h4>
    <div @click="removeName">X</div>
  </div>
</template>

<style>
.card {
  min-width: 32.28%;
  background: #1b3c8a;
  color: #fff;
  border-radius: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card div {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 0.75em;
}
</style>
