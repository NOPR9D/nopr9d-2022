<template>
    <Intro />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Content from "./../components/home/Content.vue";
import Header from "./../components/Header.vue";
import Intro from "./../components/Intro.vue";
@Options({
  components: { Content, Header , Intro},
})
export default class Home extends Vue {}
</script>

<style>
</style>