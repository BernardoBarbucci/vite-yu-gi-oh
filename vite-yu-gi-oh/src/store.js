import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    archetypeFilter: null,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=35&offset=0',
    cardsList: [],
    // arrow function + api call presa da cardswrapper
    getCards: function () {
        const url = (store.archetypeFilter !== null) ? `${store.apiUrl}&archetype=${store.archetypeFilter}` : store.apiUrl;
        return axios.get(url)
            .then((response) => {
                store.cardsList = response.data.data;
                console.log('Data received from API:', store.cardsList);
            })
            .catch(function (error) {
                console.error('Error fetching cards:', error);
            });
    }
});  