<template>
  <Canvas :title="'test'" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Canvas from "@/components/Canvas.vue";
import { Zdog } from "@/services/Zdog.ts";
import { Illustration } from "zdog";

@Options({
  components: { Canvas },

  mounted() {
    const dog = new Zdog();
    dog.addIllustration("test", document.getElementById("test") as never);
    dog.addElipse("test", 100, 50, null as never);
    dog.setIllustrationFn("test", function (this: any) {
      this.rotate.x += 0.3;
    });
    dog.animate();
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
