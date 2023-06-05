<template>
  <div class="game-area">
    <Sidebar></Sidebar>
    <Header />
    <div class="container">
      <Card
        v-for="(card, index) in mixCards"
        :card="card"
        @click.native="selectCard(card, index)"
      />
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import Sidebar from "./sidebar/Sidebar.vue";
import Header from "./header/Header.vue";
export default {
  components: {
    Card,
    Sidebar,
    Header,
  },
  data() {
    return {
      selectedCard: null,
      answer: "",
      countOfCard: this.$store.state.countOfCard,
      mixedCards: [],
      cards: this.$store.state.cards,
      winnerCard: this.$store.state.winnerCard.name,
      isFinished: this.$store.state.isFinished,
    };
  },
  methods: {
    selectCard(card, index) {
      this.mixedCards[index].isReturn = true;
      this.$store.commit("changeChance", -1);
      if (card.name === this.winnerCard) {
        window.alert('oyuncu kazandı')
      } else {
        window.alert('banka kazandı')
      }
    }
  },
  computed: {
    mixCards() {
      this.selectedCard = null;
      this.mixedCards = [];
      for (let i = 0; i < this.countOfCard; i++) {
        let newCard = this.listedCards[
          Math.floor(Math.random() * this.countOfCard)
        ];
        while (this.mixedCards.includes(newCard)) {
          newCard = this.listedCards[
            Math.floor(Math.random() * this.countOfCard)
          ];
        }
        this.mixedCards.push(newCard);
      }
      return this.mixedCards;
    },
    listedCards() {
      return this.$store.state.cards;
    }
  },
};
</script>
<style scoped>
.container,
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.result {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #858383;
  opacity: 0.8;
  color: white;
}
.result-btn {
  background-color: rgb(76, 76, 76);
  border-radius: 5px;
  opacity: 1 !important;
}
</style>
