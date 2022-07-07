<template>

    <h4 class="tt-confirm__title">
        Do you want to delete?
    </h4>

    <Button
        class="tt-page__button tt-page__button--second"
        :type="'button'"
        @onClick="onDeleteCard"
    >
        Yes
    </Button>

    <Button
        class="tt-confirm__button-close"
        :type="'button'"
        @onClick="this.$emit('onClosePopup')"
    >
        <svg xmlns="http://www.w3.org/2000/svg" height="29px" width="29px" viewBox="0 0 24 24" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
    </Button>

</template>

<script>

import Button from "../../baseComponents/Button";
import {mapActions} from "vuex";

export default {
    name: "HomePagePopup",
    components: {
        Button
    },
    methods: {
        onDeleteCard() {
            this.deleteBanner();
            this.$emit('onClosePopup');
        },
        ...mapActions({
            deleteBanner: "banners/deleteBanner",
        })
    },
}
</script>

<style scoped>

    .tt-confirm__title {
        margin: 35px 0 0;
        font-size: 20px;
    }

    .tt-page__button--second {
        width: 80px;
        margin-top: 30px;
    }

    .tt-confirm__button-close {
        position: absolute;
        top: 10px;
        right: 7px;
        background-color: transparent;
    }

    .tt-confirm__button-close:hover {
        transition: .3ms;
        transform: scale(1.2);
    }

</style>
