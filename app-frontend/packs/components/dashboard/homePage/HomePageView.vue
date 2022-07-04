<template>

    <div v-if="!$store.state.isLoader">

        <HomePageEmptyState
            @create="createBanner"
            v-if="$store.state.isDataLength"
        />

        <HomePageWithBanners
            @create="createBanner"
            v-else
        />

    </div>

    <LoaderPage v-if="$store.state.isLoader"/>

</template>

<script>

import HomePageEmptyState from "./HomePageEmptyState";
import HomePageWithBanners from "./HomePageWithBanners";
import router from "../../../router/router";
import LoaderPage from "../../baseComponents/LoaderPage";
import {mapActions} from 'vuex'

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
    mounted() {
        this.fetchBanners()
    }
}

</script>
