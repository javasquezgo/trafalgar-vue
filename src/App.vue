<template>
  <main>
    <px-header />
    <px-services />
    <px-leading />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";
import PxServices from "@/components/PxServices.vue";
import PxLeading from "@/components/PxLeading.vue";

export default {
  name: "App",
  components: { PxHeader, PxServices, PxLeading },
};
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
