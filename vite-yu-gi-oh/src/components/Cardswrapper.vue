<template>
    <section id="custom_wrapper" class="container">
        <div>
            <h1>
                Found X cards
            </h1>
        </div>
        <div class="row">
            <Singlecard v-for="card in cardsList" :key="card.id" :card="card" />
        </div>
    </section>
</template>

<script>
import Singlecard from './Singlecard.vue';
import axios from 'axios';

export default {
    name: 'Cardswrapper',
    data() {
        return {
            cardsList: [],
        };
    },
    components: {
        Singlecard
    }
}
</script>

<style lang="scss" scoped>
#custom_wrapper {
    background-color: white;
    padding: 2rem;
    margin-top: 1.5rem;
}

h1 {
    background-color: rgb(34 37 41);
    color: white;
    font-size: 1rem;
    height: 2.2rem;
    padding-top: .5rem;
    padding-left: .5rem;
}
</style>
