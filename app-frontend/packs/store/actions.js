import axios from "axios";
import router from "../router/router";
import {Toast} from "@shopify/app-bridge/actions";
import app from "../shared/shopifyApp";

export const ACTIONS = {
    actions: {
        async fetchBanners({commit, dispatch}) {
            commit('setLoader', true);
            await axios.get('/api/v1/banners')
                .then((res) => {
                    if (res.data.data.length) {
                        commit('setIsEmpty', false);
                    } else {
                        commit('setIsEmpty', true);
                    }
                    commit('setDataBanners', res.data.data);
                    dispatch('clearFields');
                })
                .finally(() => commit('setLoader', false));
        },
        async fetchBanner({state,commit},id) {
            commit('setIdBanner', id);
            commit('setLoader', true);
            await axios.get('/api/v1/banners/'+ state.idBanner)
                .then((res) => {
                    commit('setInputText', res.data.data.title);
                    commit('setInputColor', res.data.data.style.color);
                    commit('setInputWysiwyg', res.data.data.content);
                    commit('setIdProduct', res.data.data.product_id);
                    commit('setTitleProduct', res.data.data.style.titleProduct);
                    commit('setImgProduct', res.data.data.style.imgProduct);
                    router.push('editor');
                })
                .finally(() => commit('setLoader', false));
        },
        async createBanner({state,commit, dispatch}) {
            commit('setLoader', true);
            await axios.post('/api/v1/banners', {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor,
                        titleProduct: state.titleProduct,
                        imgProduct: state.imgProduct
                    },
                    content: state.inputWysiwyg,
                    product_id: state.idProduct
                }
            })
                .then(() => {
                    dispatch('fetchBanners');
                    dispatch('toastMessage', 'The banner has been created');
                    router.push('/')
                })
                .catch((res) => {
                    if (res.response.data.error.product_id) {
                        dispatch('toastMessage', res.response.data.error.product_id[0]);
                    }
                    if (res.response.data.error.title) {
                        dispatch('toastMessage', res.response.data.error.title[0]);
                    }
                })
                .finally(() => commit('setLoader', false));
        },
        async deleteBanner({state, commit, dispatch}) {
            commit('setLoader', true);
            await axios.delete('/api/v1/banners/' + state.idBanner)
                .then(() => {
                    dispatch('fetchBanners');
                })
                .finally(() => commit('setLoader', false));
        },
        async changeBanner({state, commit, dispatch}) {
            commit('setLoader', true);
            await axios.put('/api/v1/banners/' + state.idBanner, {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor,
                        titleProduct: state.titleProduct,
                        imgProduct: state.imgProduct
                    },
                    content: state.inputWysiwyg,
                    product_id: state.idProduct
                }
            })
                .then(() => {
                    router.push('/')
                    dispatch('toastMessage', 'The banner has been changed');
                })
                .catch(() => {
                    dispatch('toastMessage', 'The banner is already in use');
                })
                .finally(() => commit('setLoader', false));
        },
        clearFields({commit}) {
            commit('setIdBanner', null);
            commit('setInputText', '');
            commit('setInputWysiwyg', '');
            commit('setInputColor', '#FFFFFF');
            commit('setIdProduct', null);
            commit('setTitleProduct', '');
            commit('setImgProduct', '');
        },
        idBannerWrite({commit}, id) {
            commit('setIdBanner', id);
        },
        productWrite({commit}, value) {
            commit('setIdProduct', value.id.slice(22));
            commit('setTitleProduct', value.title);
            commit('setImgProduct', value.images[0].originalSrc);
        },
        inputLengthWysiwygWrite({commit}, value) {
            commit('setInputLengthWysiwyg', value);
        },
        inputWysiwygWrite({commit}, value) {
            commit('setInputWysiwyg', value);
        },
        inputColorWrite({commit}, value) {
            commit('setInputColor', value);
        },
        inputTextWrite({commit}, value) {
            commit('setInputText', value);
        },
        toastMessage(state, text) {
            const toastNotice = Toast.create(app, {message: text});
            toastNotice.dispatch(Toast.Action.SHOW)
            setTimeout(() => {
                toastNotice.dispatch(Toast.Action.CLEAR);
            },2500)
        },
    }
}
