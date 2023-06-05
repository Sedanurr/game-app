<template>
  <transition name="fade">
    <span v-if="!collapsed">
      <span>Kart sayısını seçiniz</span>
      <select v-model="countOfCard">
        <option>4</option>
        <option>6</option>
        <option>8</option>
      </select>
      <span>Kazanan kartı seçiniz</span>
      <select v-model="winnerCard">
        <option
          v-show="countOfCard == 4"
          v-for="card in cards.slice(0, 4)"
          :key="card.id"
          :value="card.name"
        >
          {{ card.name }}</option
        >
        <option
          v-show="countOfCard == 6"
          v-for="card in cards.slice(0, 6)"
          :value="card.name"
        >
          {{ card.name }}</option
        >
        <option
          v-show="countOfCard == 8"
          v-for="card in cards"
          :value="card.name"
        >
          {{ card.name }}
        </option></select
      >
      <div>
        <button type="submit">Kaydet</button>
      </div>
    </span>
  </transition>
</template>
<script>
import { collapsed } from "./state";
export default {
  data() {
    return {
      collapsed,
      time: false,
      cards: this.$store.state.cards,
      countOfCard: this.$store.state.countOfCard,
      winnerCard: this.$store.state.winnerCard.name,
    };
  },
  methods: {
    isCheck() {
      this.time = !this.time;
    },
  },
  watch: {
    countOfCard() {
      this.$store.commit("changeCountOfCard", this.countOfCard);
    },
    winnerCard() {
      let winner = this.$store.state.cards.find(
        (card) => card.name === this.winnerCard
      );
      this.$store.commit("changeWinnerCard", winner);
    },
  },
  computed: {
    chances() {
      return this.$store.state.chances
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
</style>
