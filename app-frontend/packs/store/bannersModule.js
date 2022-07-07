import axios from "axios";
import router from "../router/router";

export const bannersModule = {
    state() {
        return {
            isLoader: '',
            isEmpty: true,
            dataBanners: [],
            inputText: '',
            inputColor: '#FFFFFF',
            inputWysiwyg: '',
            inputLengthWysiwyg: 0,
            idBannerDelete: null,
            idBannerChange: null,
            idProduct: null
        }
    },
    mutations: {
        setLoader(state, value) {
            state.isLoader = value;
        },
        setDataBanners(state, data) {
            state.dataBanners = data;
        },
        setIsEmpty(state, value) {
            state.isEmpty = value;
        },
        setInputText(state, value) {
            state.inputText = value;
        },
        setInputColor(state, value) {
            state.inputColor = value;
        },
        setInputWysiwyg(state, value) {
            state.inputWysiwyg = value;
        },
        setInputLengthWysiwyg(state, value) {
            state.inputLengthWysiwyg = value;
        },
        setIdBannerDelete(state, id) {
            state.idBannerDelete = id;
        },
        setIdBannerChange(state, id) {
            state.idBannerChange = id;
        },
        setIdProduct(state, value) {
            state.idProduct = value;
        }
    },
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
            commit('setIdBannerChange', id);
            commit('setLoader', false);
            await axios.get('/api/v1/banners/'+ state.idBannerChange)
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
            await axios.delete('/api/v1/banners/' + state.idBannerDelete)
                .then(() => {
                    dispatch('fetchBanners');
                })
                .finally(() => commit('setLoader', true));
        },
        async changeBanner({state}) {
            await axios.put('/api/v1/banners/' + state.idBannerChange, {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: state.idProduct
                }
            })
                .then(() => router.push('/'));
        },
        clearFields({commit}) {
            commit('setIdBannerChange', null);
            commit('setInputText', '');
            commit('setInputWysiwyg', '');
            commit('setInputColor', '#FFFFFF');
            commit('setIdProduct', null);
        },
        idBannerDelete({commit}, id) {
            commit('setIdBannerDelete', id);
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

    },
    namespaced: true
}
