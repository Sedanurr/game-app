<template>
  <div>
    <div
      class="card"
      :style="{
        'background-image': card.isReturn
          ? 'url(' + card.image + ')'
          : 'url(' + defaultImg + ')',
      }"
    >
      <p>{{ card.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {
      defaultImg: "/src/assets/cards/playing-cards-back-2.jpg",
    };
  }
};
</script>
<style scoped>
.card {
  width: 200px;
  height: 232px;
  border-radius: 5px;
  border: 1px solid #666;
  transition: box-shadow 0.5s;
  background-image: url("../assets/cards/playing-cards-back-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 15px;
}
.card p {
  margin-top: -30px;
}

.card img {
  width: 100px;
  height: 100px;
}

.card:hover {
  box-shadow: 0px 5px 45px #666;
  transition: box-shadow 0.5s;
}
</style>
