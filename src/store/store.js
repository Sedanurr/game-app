import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    countOfCard: 4,
    cards: [
      {
        id: 1,
        name: "kupa kızı",
        image: "/src/assets/cards/queen_of_hearts2.png",
        isReturn: false
      },
      {
        id: 2,
        name: "maça kızı",
        image: "/src/assets/cards/queen_of_clubs2.png",
        isReturn: false
      },
      {
        id: 3,
        name: "karo kızı",
        image: "/src/assets/cards/queen_of_diamonds2.png",
        isReturn: false
      },
      {
        id: 4,
        name: "sinek kızı",
        image: "/src/assets/cards/queen_of_spades2.png",
        isReturn: false
      },
      {
        id: 5,
        name: "kupa kralı",
        image: "/src/assets/cards/king_of_hearts2.png",
        isReturn: false
      },
      {
        id: 6,
        name: "maça kralı",
        image: "/src/assets/cards/king_of_clubs2.png",
        isReturn: false
      },
      {
        id: 7,
        name: "sinek kralı",
        image: "/src/assets/cards/king_of_spades2.png",
        isReturn: false
      },
      {
        id: 8,
        name: "karo kralı",
        image: "/src/assets/cards/king_of_diamonds2.png",
        isReturn: false
      },
    ],
    chances: { 4: 1, 6: 2, 8: 3 },
    chance: 1,
    winnerCard: {
      id: 1,
      name: "kupa kızı",
      image: "/src/assets/cards/queen_of_hearts2.png",
      isReturn: false
    },
    isFinished: false,
  },
  getters: {

  },
  mutations: {
    changeCountOfCard(state, payload) {
      state.countOfCard = payload
      state.chances = state.chances[payload]
    },
    changeWinnerCard(state, payload) {
      state.winnerCard = payload
    },
    changeChance(state, payload) {
      state.chance += payload
    },
    changeIsFinished(state, payload) {
      state.isFinished = payload
    },

  },
  actions: {

  }
});
