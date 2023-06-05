<template>
    <div class="header">
        <p>Kalan Seçim Hakkı: {{ chance }}</p>
        <p>Kazanan Kart: {{ winnerCard }}</p>
    </div>
</template>
<script>
export default {
   
    computed: {
        winnerCard() {
            return this.$store.state.winnerCard.name
        },
        chance() {
            return this.$store.state.chance
        }
    }
}
</script>
<style>
.header {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-around;
}

.header p {
    border: solid 1px #ffaac9;
    padding: 6px;
    border-radius: 5px;
}
</style>