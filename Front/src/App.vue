<template>
<div class="container-fluid">
  <router-view ></router-view>
</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import {initShape} from '@/services/mojs'
export default class App extends Vue {
  mounted(){
    initShape()
  }


}
</script>

<style lang="scss">

@import './assets/bootstrap5/bootstrap-grid';
@import './assets/bootstrap5/bootstrap-utilities';
html,
body {
  height: 100%;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: black;
}

#app {
  font-family: Lato, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  background: transparent;
  position: absolute;
  @extend .auto-size;
}

.auto-size {
  display: flex !important;
  flex-grow: 1;
}
</style>
