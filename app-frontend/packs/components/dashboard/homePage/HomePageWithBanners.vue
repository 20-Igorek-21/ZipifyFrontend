<template>

    <section class="tt-home-page-with-banners">

        <UiButton class="tt-page__tt-button tt-page__tt-button--first"
                  :typeButton="'button'"
                  @click="createNewBanner">Create new banner</UiButton>
    </section>

</template>

<script>

import UiButton from "../../core/UI/UiButton";

export default {
    name: "HomePageWithBanners",
    components: {
        UiButton
    },
    methods: {
        createNewBanner() {
            this.$emit('clickNewBanner');
            console.log('2')
        }
    }
}
</script>

<style scoped>

.tt-page__tt-button--first {
    width: 250px;
    background-color: var(--color-white);
    color: var(--color-red);
    border: 2px solid var(--color-red);
}

</style>
