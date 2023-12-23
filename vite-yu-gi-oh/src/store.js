import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    archetypeFilter: null,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=35&offset=0',
    cardsList: [],
    // arrow function + api call presa da cardswrapper
    getCards: function () {
        console.log(this);
        const url = (this.archetypeFilter !== null) ? `${this.apiUrl}&archetype=${archetype}` : this.apiUrl;
        axios.get(url)
            .then((response) => {
                this.cardsList = response.data.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
}); 