<template lang="">
    <article>
        <div class="image">
            <img :src="card.card_images[0].image_url" alt="image">
        </div>
        <h3>
            {{ card.name }}
        </h3>
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

    h3 {
        font-size: .8rem;
        color: white;
    }
}
</style>