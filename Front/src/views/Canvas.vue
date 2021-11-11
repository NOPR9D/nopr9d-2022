<template>
  <Canvas :title="'webgl-canvas'" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Canvas from "./../components/Canvas.vue";
@Options({
  components: { Canvas },
})
export default class CanvasPage extends Vue {}
</script>

<style>
</style>