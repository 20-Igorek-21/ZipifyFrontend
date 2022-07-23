<template>
    <div v-if="!isLoader">
        <HomePageEmptyState
            class="tt-home-page-empty-state"
            v-if="isEmpty"
            @create="createBanner"
        />

        <HomePageWithBanners
            class="tt-home-page-with-banners"
            v-else
            @create="createBanner"
        />
    </div>

    <LoaderPage
        v-else
        class="tt-loader"
    />
</template>

<script>

import HomePageEmptyState from './HomePageEmptyState';
import HomePageWithBanners from './HomePageWithBanners';
import router from '../../../router/router';
import LoaderPage from '../../baseComponents/LoaderPage';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'HomePageView',
    components: {
        LoaderPage,
        HomePageWithBanners,
        HomePageEmptyState
    },
    methods: {
        createBanner() {
            router.push('/editor');
        },
        ...mapActions({
            fetchBanners: 'fetchBanners'
        })
    },
    computed: {
        ...mapState({
            isLoader: state => state.isLoader,
            isEmpty: state => state.isEmpty
        })
    },
    mounted() {
        this.fetchBanners();
    }
};

</script>
