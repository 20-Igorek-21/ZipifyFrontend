import axios from "axios";
import router from "../router/router";

export const ACTIONS = {
    actions: {
        async fetchBanners({commit}) {
            commit('setLoader', false);
            await axios.get('/api/v1/banners')
                .then((res) => {
                    if (res.data.data.length) {
                        commit('setIsEmpty', false);
                    } else {
                        commit('setIsEmpty', true);
                    }
                    commit('setDataBanners', res.data.data);
                })
                .finally(() => commit('setLoader', true));
        },
        async fetchBanner({state,commit},id) {
            commit('setIdBanner', id);
            commit('setLoader', false);
            await axios.get('/api/v1/banners/'+ state.idBanner)
                .then((res) => {
                    commit('setInputText', res.data.data.title);
                    commit('setInputColor', res.data.data.style.color);
                    commit('setInputWysiwyg', res.data.data.content);
                    commit('setIdProduct', res.data.data.product_id);
                    router.push('editor');
                })
                .finally(() => commit('setLoader', true));
        },
        async createBanner({state,commit}) {
            commit('setLoader', false);
            await axios.post('/api/v1/banners', {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: state.idProduct
                }
            })
                .then(() => router.push('/'))
                .finally(() => commit('setLoader', true));
        },
        async deleteBanner({state, commit, dispatch}) {
            commit('setLoader', false);
            await axios.delete('/api/v1/banners/' + state.idBanner)
                .then(() => {
                    dispatch('fetchBanners');
                })
                .finally(() => commit('setLoader', true));
        },
        async changeBanner({state, commit}) {
            commit('setLoader', false);
            await axios.put('/api/v1/banners/' + state.idBanner, {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: state.idProduct
                }
            })
                .then(() => router.push('/'))
                .finally(() => commit('setLoader', true));
        },
        clearFields({commit}) {
            commit('setIdBanner', null);
            commit('setInputText', '');
            commit('setInputWysiwyg', '');
            commit('setInputColor', '#FFFFFF');
            commit('setIdProduct', null);
        },
        idBannerWrite({commit}, id) {
            commit('setIdBanner', id);
        },
        idProductWrite({commit}, id) {
            commit('setIdProduct', id);
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
    }
}
