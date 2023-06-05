<template>
    <!-- <component
      key="mainComponent"
      @activeComponentEvent="activeComponent = $event"
      :is="activeComponent"></component> -->
      <GameCards />
</template>
<script>
  import GameCards from "./components/GameCards";
export default {
  // data(){
  //   return {
  //     activeComponent : "GameCards"
  //   }
  // },
  components : {
    GameCards
  }
}
</script>
<style>
  body{
    font-family: sans-serif;
  }

</style>
