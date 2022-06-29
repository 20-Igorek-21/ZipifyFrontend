<template>

    <div v-if="!isLoading">

        <HomePageEmptyBanner
            @create="createBanner"
            v-if="isShowBlock"/>

        <HomePageWithBanners
            @create="createBanner"
            v-else/>

    </div>

    <LoaderPage v-if="isLoading"/>

</template>

<script>

import HomePageEmptyBanner from "./HomePageEmptyBanners";
import HomePageWithBanners from "./HomePageWithBanners";
import router from "../../../router/router";
import axios from "axios";
import LoaderPage from "../../baseComponents/LoaderPage";

export default {
    name: 'HomePageView',
    components: {
        LoaderPage,
        HomePageWithBanners,
        HomePageEmptyBanner,
    },
    data() {
        return {
            isShowBlock: false,
            isLoading: false
        }
    },
    methods: {
        createBanner() {
            router.push('/editor');
        },
        fetchBanners() {
            this.isLoading = true;
            axios.get('')
                .finally( () => this.isLoading = false)
        },
    },
    mounted() {
        this.fetchBanners()
    }
}

</script>
