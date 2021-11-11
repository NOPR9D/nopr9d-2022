<template>
  <div class="intro_wrap">
    <div class="intro_reveal" id="intro_reveal"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { intro } from "@/services/mojs";

@Options({
  props: {},
  mounted() {
    intro();
  },
})
export default class Intro extends Vue {}
</script>

<style>
.intro_wrap {
  position: relative;
  height: 100%;
  width: 100%;
}

.intro_reveal {
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: 2;

}
.intro_reveal >   * > svg{
    overflow: visible;
  }
</style>
