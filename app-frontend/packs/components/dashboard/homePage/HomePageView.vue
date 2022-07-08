<template>

    <div v-if="isLoader">

        <HomePageEmptyState
            @create="createBanner"
            v-if="isEmpty"
        />

        <HomePageWithBanners
            @create="createBanner"
            v-else
        />

    </div>

    <LoaderPage v-else/>

</template>

<script>

import HomePageEmptyState from "./HomePageEmptyState";
import HomePageWithBanners from "./HomePageWithBanners";
import router from "../../../router/router";
import LoaderPage from "../../baseComponents/LoaderPage";
import {mapActions, mapState} from 'vuex';

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
            fetchBanners: 'fetchBanners',
        })
    },
    computed: {
        ...mapState ({
            isLoader: state => state.isLoader,
            isEmpty: state => state.isEmpty
        })
    },
    mounted() {
        this.fetchBanners();
    }
}

</script>
