<template>

    <HomePageEmptyBanner @clickNewBannerEmpty="createNewBanner" v-if="isShowBlock"></HomePageEmptyBanner>

    <HomePageWithBanners @clickNewBanner="createNewBanner" v-else></HomePageWithBanners>

</template>

<script>

import HomePageEmptyBanner from "./HomePageEmptyBanners";
import HomePageWithBanners from "./HomePageWithBanners";

export default {
    name: 'HomePageView',
    components: {
        HomePageWithBanners,
        HomePageEmptyBanner,
    },
    data() {
        return {
            isShowBlock: true,
        }
    },
    methods: {
        createNewBanner() {
            console.log('yes')
        }
    },
    computed: {
        // createNewBanner() {
        //     console.log('yes')
        // }
    }
}

</script>
