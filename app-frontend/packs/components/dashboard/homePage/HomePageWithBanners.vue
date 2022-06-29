<template>

    <section
        class="tt-home-page-with-banners">

            <HomePageBanner
                @onDeleteBanner="onDeleteBanner"/>

            <Button
                class="tt-page__button tt-page__button--first"
                :type="'button'"
                @onClick="createBanner">
                Create new banner
            </Button>
    </section>

    <HomePagePopup v-if="isShowPopup"
                   :idBanner="idBanner"
                   @onClosePopup="isShowPopup = false"/>

</template>

<script>

import Button from "../../baseComponents/Button";
import HomePageBanner from "./HomePageBanner";
import HomePagePopup from "./HomePagePopup";

export default {
    name: "HomePageWithBanners",

    components: {
        HomePagePopup,
        HomePageBanner,
        Button
    },

    data() {
        return {
            isShowPopup: false,
            idBanner: '',
        }
    },

    methods: {
        createBanner() {
            this.$emit('create');
        },
        onDeleteBanner(id) {
            this.idBanner = id;
            this.isShowPopup = true;
        },
    }
}
</script>

<style scoped>

    .tt-page__button--first {
        width: 200px;
        position: absolute;
        bottom: 50px;
        right: 70px;
        background-color: var(--color-white);
        color: var(--color-red);
        border: 2px solid var(--color-red);
    }

    .tt-page__button--first:hover {
        background-color: var(--color-red);
        color: var(--color-white);
    }

</style>

