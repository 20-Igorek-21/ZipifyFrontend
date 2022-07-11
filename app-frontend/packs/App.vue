<template>

    <div class="tt-page">

        <HeaderPage/>

        <main class="tt-page__main-content">
            <router-view></router-view>
        </main>

    </div>

</template>

<script>

import HeaderPage from './components/baseComponents/HeaderPage';

export default {
    name: 'App',
    components: {
        HeaderPage
    }
};

</script>

<style scoped>

    .tt-page {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .tt-page__main-content {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
