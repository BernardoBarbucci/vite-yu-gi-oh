<template>
    <section id="custom_wrapper" class="container">
        <div>
            <h1>Found {{ filteredCards.length }} cards</h1>
        </div>
        <div class="row">
            <Singlecard v-for="card in filteredCards" :key="card.id" :card="card" />
        </div>
    </section>
</template>
  
<script>
import Singlecard from './Singlecard.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Cardswrapper',
    components: {
        Singlecard,
    },
    data() {
        return {
            store,
        };
    },
    computed: {
        filteredCards() {
            // filtra le cards in base a this.
            if (store.archetypeFilter) {
                return store.cardsList.filter(card => card.archetype === store.archetypeFilter);
            }
            return store.cardsList;
        },
    },
    methods: {
        getCards() {
            store.getCards()
                .then(() => {
                    console.log('CardsList in Cardswrapper:', store.cardsList);
                })
                .catch(error => {
                    console.error('Error fetching cards:', error);
                });
        },
    },
    mounted() {
        this.getCards();
    },
    watch: {
        // Controlla il change in archetypeFilter e recupera le carte di conseguenza
        'store.archetypeFilter': 'getCards',
    },
};
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