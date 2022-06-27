<template>

    <div class="tt-page">

        <header class="tt-page__header">
            <a class="tt-link tt-page__link-logo">Tik Tok Banner</a>
        </header>

        <main class="tt-page__main-content">
            <router-view></router-view>
        </main>

    </div>

</template>

<script>

export default {

components: {  }
}
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

    .tt-page__header {
        height: 90px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-red);
        color: var(--color-white);
    }

    .tt-page__link-logo {
        margin-left: 40px;
        font-size: 48px;
        font-weight: 600;
    }

    @media (max-width: 450px) {
        .tt-page__link-logo {
            margin-left: 20px;
            font-size: 38px;
        }
    }

</style>
