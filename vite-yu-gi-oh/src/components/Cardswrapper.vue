<template>
    <section id="custom_wrapper" class="container">
        <div>
            <h1>
                Found {{ cardsList.length }} cards
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
            apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=35&offset=0',
        };
    },
    components: {
        Singlecard,
    },
    methods: {
        getCards() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.cardsList = response.data.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created() {
        this.getCards();
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