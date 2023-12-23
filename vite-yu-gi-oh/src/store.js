import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({

    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0',
    cardsList: [],
    // arrow function + api call presa da cardswrapper
    getCards: function (archetypeFilter = null) {
        const url = (archetypeFilter !== null) ? `${store.apiUrl}&archetype=${archetypeFilter}` : store.apiUrl;
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