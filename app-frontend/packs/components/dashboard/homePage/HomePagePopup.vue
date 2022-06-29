<template>

    <div
        class="tt-home-page-popup"
        @click.stop="onClosePopup">

        <div
            class="tt-home-page-popup__content"
            @click.stop>

            <h4
                class="tt-home-page-popup__title">
                Do you want to delete?
            </h4>

            <Button
                class="tt-page__button tt-page__button--first"
                :type="'button'"
                @onClick="onDeleteCard">
                Yes
            </Button>

            <Button
                class="tt-home-page-popup__button-close"
                :type="'button'"
                @onClick="onClosePopup">
                    <svg xmlns="http://www.w3.org/2000/svg" height="29px" width="29px" viewBox="0 0 24 24"  fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
            </Button>

        </div>

    </div>

</template>

<script>

import Button from "../../baseComponents/Button";

export default {
    name: "HomePagePopup",
    components: { Button },

    props: {
        idBanner: String,
    },

    methods: {
        onDeleteCard() {
            this.axios.delete(`/api/v1/banners/`+ this.idBanner)
                .then((res) => {
                    console.log(res);
                    this.onClosePopup();
                })

        },
        onClosePopup() {
            this.$emit('onClosePopup');
        }
    },
}
</script>

<style scoped>

    .tt-home-page-popup {
        position: fixed;
        display: flex;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99999;
    }

    .tt-home-page-popup__content {
        height: 170px;
        width: 285px;
        margin: auto;
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        background-color: #FFF;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);
    }

    .tt-home-page-popup__title {
        margin: 35px 0 0;
        font-size: 20px;
    }

    .tt-page__button--first {
        width: 80px;
        margin-top: 30px;
        background-color: var(--color-white);
        color: var(--color-red);
        border: 2px solid var(--color-red);
    }

    .tt-page__button--first:hover {
        background-color: var(--color-red);
        color: var(--color-white);
    }

    .tt-home-page-popup__button-close {
        position: absolute;
        top: 10px;
        right: 7px;
        background-color: transparent;
    }

    .tt-home-page-popup__button-close:hover {
        transition: .3ms;
        transform: scale(1.2);
    }

</style>
