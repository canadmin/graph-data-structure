<template>
    <app-node-select></app-node-select>
</template>

<script>
import NodeSelectPage from "./components/NodeSelectPage";
export default {

  name: 'App',
  components: {
      appNodeSelect : NodeSelectPage
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
}
</style>
