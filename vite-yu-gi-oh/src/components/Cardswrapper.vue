<template>
    <section id="custom_wrapper" class="container">
        <div>
            <h1>
                Found {{ store.cardsList.length }} cards
            </h1>
        </div>
        <div class="row">
            <Singlecard v-for="card in store.cardsList" :key="card.id" :card="card" />
        </div>
    </section>
</template>

<script>
import Singlecard from './Singlecard.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Cardswrapper',
    data() {
        return {
            store,
        };
    },
    components: {
        Singlecard,
    },
    methods: {
        created() {
            this.store.getCards();
        }
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


<!-- TYPE: 
cd /Users/Berna/Desktop/vite-yu-gi-oh/vite-yu-gi-oh 
npm run dev
-->