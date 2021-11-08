<template>
  <Canvas :title="'webgl-canvas'" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Canvas from "./../components/Canvas.vue";
import { Zdog } from "./../services/Zdog";
@Options({
  components: { Canvas },
  methods: {
    zDog: () => {
      const dog = new Zdog();
      dog.addIllustration("test", document.getElementById("test") as never);
      dog.addElipse("test", 100, 50, null as never);
      dog.setIllustrationFn("test", function (this: any) {
        this.rotate.x += 0.3;
      });
      dog.animate();
    },
  },
})
export default class Home extends Vue {}
</script>

<style>
</style>