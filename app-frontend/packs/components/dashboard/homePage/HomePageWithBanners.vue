<template>

    <section class="tt-home-page-with-banners">

        <HomePageBanner
            v-for="banner of dataBanners"
            :key="banner.id"
            :banner="banner"
            @onDeleteBanner="onDeleteBanner"
        />

            <Button
                class="tt-page__button tt-page__button--first"
                type="button"
                @onClick="this.$emit('create')"
            >
                Create new banner
            </Button>

    </section>

    <Confirm
        v-if="isShowPopup"
        @confirm="onClosePopup"
    >
        <HomePagePopup @onClosePopup="onClosePopup"/>
    </Confirm>

</template>

<script>

import Button from "../../baseComponents/Button";
import HomePageBanner from "./HomePageBanner";
import HomePagePopup from "./HomePagePopup";
import Confirm from "../../baseComponents/Confirm";
import {mapState} from "vuex";

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
        onClosePopup() {
            this.isShowPopup = false;
        }
    },
    computed: {
        ...mapState({
            dataBanners: state => state.dataBanners
        })
    },
}

</script>

<style scoped>

    .tt-home-page-with-banners {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .tt-page__button--first {
        width: 200px;
        position: absolute;
        bottom: 50px;
        right: 70px;
    }

</style>

