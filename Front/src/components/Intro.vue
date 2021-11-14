<template >
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="intro_wrap">
          <div class="intro_reveal" id="intro_reveal"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { intro } from "@/services/mojs";

@Options({
  props: {},
  mounted() {
    intro("intro_reveal");
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
.intro_reveal > * > svg {
  overflow: visible;
}

.beaker_wrap {
  position: relative;
  height: 100%;
  width: 100%;
}

.beaker_reveal {
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: 2;
}
.beaker_reveal > * > svg {
  overflow: visible;
}
</style>
