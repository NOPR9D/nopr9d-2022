<template>
  <div>header</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  mounted() {
    console.log("hi");
  },
})
export default class Header extends Vue {}
</script>

<style>

</style>
