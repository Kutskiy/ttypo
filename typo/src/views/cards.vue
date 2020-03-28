<template>
    <div>
        <navbar />
        <br>
        <br>
        <br>
        <calcCards />
        <br>
        <br>
        <myfooter />
    </div>
</template>

<script>
    import navbar from '@/components/navbar.vue'
    import myfooter from "@/components/myfooter.vue"
    import calcCards from "@/components/calc-cards.vue"
    // let cardCost = this.$store.getters.getCardCost;
    // console.log(cardCost);
    export default {
        name: 'cards',
        components: {
            navbar,
            myfooter,
            calcCards
        },

    }

</script>


<style scoped>

</style>