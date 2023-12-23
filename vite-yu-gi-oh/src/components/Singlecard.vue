<template lang="">
    <article>
        <div class="image">
            <img :src="card.card_images[0].image_url" alt="image">
        </div>
        <div class="card-info">
            <h1>
            {{ card.name }}
        </h1>
        <h2>
            Type: {{ card.type }}
        </h2>
        <p v-if="card.type.toLowerCase().includes('monster')">
            Level: {{ card.level }}
        </p>
        <!-- <p>
            {{ card.desc }}
        </p> -->
        </div>
    </article>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    width: calc(100% / 5 - 1rem);
    margin: .5rem;
    border: 2px solid white;
    background-color: rgb(203 145 73);

    img {
        width: 100%;
        margin-bottom: .3rem;
    }

    .card-info {
        border: 2px solid black;

        h1 {
            text-align: center;
            height: 2.5rem;
            font-size: .9rem;
            color: black;
            border-bottom: 1px solid black;
        }

        h2 {
            height: 1rem;
            padding-left: .2rem;
            font-size: .8rem;
            color: black;
        }

        p {
            font-size: .8rem;
            padding-left: .2rem;
            color: black;
        }

        // p {
        //     opacity: 0;
        //     transition: opacity 0.3s;
        // }

        // p:hover {
        //     opacity: 1;
        // }
    }

}
</style>