<template>

    <section class="tt-home-page-with-banners">

        <HomePageBanner
            v-for="banner of banners"
            :key="banner"
            :banner="banner"
            @onDeleteBanner="onDeleteBanner"
        />

            <Button
                class="tt-page__button tt-page__button--first"
                :type="'button'"
                @onClick="this.$emit('create')"
            >
                Create new banner
            </Button>

    </section>

    <Confirm
        v-if="isShowPopup"
        @confirm="isShowPopup = false"
    >
        <HomePagePopup @onClosePopup="isShowPopup = false"/>
    </Confirm>

</template>

<script>

import Button from "../../baseComponents/Button";
import HomePageBanner from "./HomePageBanner";
import HomePagePopup from "./HomePagePopup";
import Confirm from "../../baseComponents/Confirm";
import { mapState } from "vuex";

export default {
    name: "HomePageWithBanners",
    components: {
        Confirm,
        HomePagePopup,
        HomePageBanner,
        Button
    },
    data() {
        return {
            isShowPopup: false,
        }
    },
    methods: {
        onDeleteBanner() {
            this.isShowPopup = true;
        },
    },
    computed: {
        ...mapState({
            banners: state => state.banners
        })
    },
}

</script>

<style scoped>

    .tt-page__button--first {
        width: 200px;
        position: absolute;
        bottom: 50px;
        right: 70px;
    }

</style>

