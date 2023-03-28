<script setup>
import { useCounterStore } from "remote_app/counter.js";

const store = useCounterStore();
</script>
<template>
  <div>Count: {{ store.count }}</div>
  <div>doubleCount: {{ store.doubleCount }}</div>
  <div><button @click="store.increment()">increment count</button></div>

</template>
