<template>

    <div v-if="!isLoader">

        <HomePageEmptyState
            @create="createBanner"
            v-if="isLengthData"
        />

        <HomePageWithBanners
            @create="createBanner"
            v-else
        />

    </div>

    <LoaderPage v-if="isLoader"/>

</template>

<script>

import HomePageEmptyState from "./HomePageEmptyState";
import HomePageWithBanners from "./HomePageWithBanners";
import router from "../../../router/router";
import LoaderPage from "../../baseComponents/LoaderPage";
import {mapActions, mapState} from 'vuex'

export default {
    name: 'HomePageView',
    components: {
        LoaderPage,
        HomePageWithBanners,
        HomePageEmptyState,
    },
    methods: {
        createBanner() {
            router.push('/editor');
        },
        ...mapActions({
            fetchBanners: 'banners/fetchBanners',
        })
    },
    computed: {
        ...mapState ({
            isLoader: state => state.banners.isLoader,
            isLengthData: state => state.banners.isLengthData
        })
    },
    mounted() {
        this.fetchBanners();
    }
}

</script>
