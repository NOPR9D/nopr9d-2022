<template>
  <canvas :class="title" :id="title" width="240" height="240"></canvas>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { App as ThreeApp } from "./../services/three";

@Options({
  props: {
    title: { type: String },
  },
  mounted() {
    new ThreeApp();
  },
})
export default class Canvas extends Vue {}
</script>

<style>

</style>
