import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    archetypeFilter: null,
    // arrow function + api call presa da cardswrapper
    getCards: function () => {
    const url = (this.archetypeFilter) ? `${this.apiUrl}&archetype=${archetype}` : this.apiUrl;
    axios.get(url)
        .then((response) => {
            this.cardsList = response.data.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
}); 