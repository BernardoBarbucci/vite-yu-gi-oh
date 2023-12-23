<template lang="">
    <article>
        <div class="image">
            <img :src="card.card_images[0].image_url" alt="image">
        </div>
        <h1>
            {{ card.name }}
        </h1>
        <hr/>
        <h2>
            {{ card.type }}
        </h2>
        <p>
            {{ card.desc }}
        </p>

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

    h1 {
        font-size: 1rem;
        color: black;
    }

    h2 {
        font-size: .8rem;
        color: black;
    }

    p {
        opacity: 0;
        transition: opacity 0.3s;
    }

    p:hover {
        opacity: 1;
    }
}
</style>