<template>

    <div
        class="tt-home-page-banner">

        <h2
            class="tt-text tt-home-page-banner__title">
            Name banner
        </h2>

        <p
            class="tt-text tt-home-page-banner__text">
            Name banner
        </p>

        <p
            class="tt-text tt-home-page-banner__target-product">
            Name banner
        </p>

        <Button
            class="tt-home-page-banner__button tt-home-page-banner__button--first"
            :type="'button'">
                <svg xmlns="http://www.w3.org/2000/svg" height="29px" width="29px" viewBox="0 0 24 24" fill="#000000">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
        </Button>

        <Button
            class="tt-home-page-banner__button tt-home-page-banner__button--second"
            :type="'button'">
                <svg xmlns="http://www.w3.org/2000/svg" height="29px" width="29px" viewBox="0 0 24 24" fill="#4CD91A">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                        <path
                            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                    </g>
                </svg>
        </Button>

        <Button
            class="tt-home-page-banner__button tt-home-page-banner__button--third"
            :type="'button'"
            @onClick="$emit('onDeleteBanner', this.id)">
                <svg xmlns="http://www.w3.org/2000/svg" height="29px" width="29px" viewBox="0 0 24 24"  fill="var(--color-red)">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
        </Button>

    </div>

</template>

<script>

import Button from "../../baseComponents/Button";

export default {
    name: "HomePageBanner",
    components: {
        Button,
    },
    data() {
        return {
            id: '',
        }
    },
}
</script>

<style scoped>

    .tt-home-page-banner {
        height: 180px;
        width: 420px;
        margin: 10px;
        padding: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 8px;
        background-color: #FFF;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);
    }

    .tt-home-page-banner__title {
        font-size: 24px;
        max-width: 320px;
    }

    .tt-home-page-banner__text {
        font-size: 18px;
        max-width: 320px;
    }

    .tt-home-page-banner__target-product {
        display: flex;
        justify-content: center;
        width: 147px;
        padding: 3px;
        border-radius: 4px;
        font-size: 16px;
        background-color: #E7E3E3;
    }

    .tt-home-page-banner__button {
        position: absolute;
        right: 12px;
        background-color: transparent;
    }

    .tt-home-page-banner__button--first {
        top: 14px;
    }

    .tt-home-page-banner__button--second {
        top: 72px;
    }

    .tt-home-page-banner__button--third {
        bottom: 14px;
    }

    .tt-home-page-banner__button:hover {
        transition: .3ms;
        transform: scale(1.2);
    }

</style>
