<template>
  <div>
    <button class="btn btn-success" @click="increase">+ Arttır</button>
    <button class="btn btn-danger" @click="decrease">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increaseAction">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseAction">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync">+ Async Arttır</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'; 
export default {
  methods :{
    ...mapMutations([
      "increase",
      "decrease"
    ]),
    // increaseAction(){
    //   this.$store.dispatch("increaseAction")
    // },
    // decreaseAction(){
    //   this.$store.dispatch("decreaseAction")
    // },
    // increaseAsync(){
    //   this.$store.dispatch("incrementAsync")
    // },
    ...mapActions([
      "incrementAsync",
      "increaseAction",
      "decreaseAction"
    ])

    // incrementCounter(){
    //   //this.$emit("counterEvent", 1);
    //   // this.$store.state.counter ++;
    //   this.$store.commit("increase")
    // },
    // decrementCounter(){
    //   //this.$emit("counterEvent", -1);
    //   // this.$store.state.counter --;
    //   this.$store.commit("decrease")
    // }
  } 
    
  }

</script>

<style>
</style>
