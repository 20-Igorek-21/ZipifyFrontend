<template>

    <header class="tt-page__header">
        <router-link
            class="tt-link tt-page__link-logo"
            to="/"
        >
            Tik Tok Banner
        </router-link>
    </header>

</template>

<script>

export default {
    name: "HeaderPage"
}

</script>

<style scoped>

    .tt-page__header {
        min-height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-red);
        color: var(--color-white);
    }

    .tt-page__link-logo {
        margin-left: 40px;
        font-size: 36px;
        font-weight: 600;
        color: var(--color-white);
    }

    .tt-page__link-logo:hover {
        opacity: .8;
    }

    @media (max-width: 450px) {
        .tt-page__link-logo {
            margin-left: 20px;
            font-size: 30px;
        }
    }

</style>
