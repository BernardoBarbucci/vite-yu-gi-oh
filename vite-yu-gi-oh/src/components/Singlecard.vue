<template lang="">
    <article>
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

<style lang="scss" scoped></style>