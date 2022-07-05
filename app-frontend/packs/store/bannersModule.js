import axios from "axios";
import router from "../router/router";

export const bannersModule = {
    state() {
        return {
            isLoader: '',
            isLengthData: true,
            dataBanners: [],
            dataBanner: [],
            inputText: '',
            inputColor: '',
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
        setDataBanner(state, data) {
            state.dataBanner = data;
        },
        setLengthData(state, value) {
            state.isLengthData = value;
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
        fetchBanners({commit}) {
            commit('setLoader', true);
            axios.get('/api/v1/banners')
                .then((res) => {
                    if (res.data.data.length) {
                        commit('setLengthData', false);
                    } else {
                        commit('setLengthData', true);
                    }
                    commit('setDataBanners', res.data.data);
                })
                .finally(() => commit('setLoader', false));
        },
        fetchBanner({state,commit}) {
            commit('setLoader', true);
            axios.get('/api/v1/banners/'+ state.idBannerChange)
                .then((res) => {
                    commit('setDataBanner', res.data.data);
                    router.push('editor');
                })
                .finally(() => commit('setLoader', false));
        },
        createBanner({state}) {
            axios.post('/api/v1/banners', {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: 6909106094219
                }
            })
                .then(() => router.push('/'));
        },
        deleteBanner({state, commit, dispatch}) {
            commit('setLoader', true);
            axios.delete('/api/v1/banners/' + state.idBannerDelete)
                .then(() => {
                    dispatch('fetchBanners');
                })
                .finally(() => commit('setLoader', false));
        },
        changeBanner({state}) {
            axios.put('/api/v1/banners/' + state.idBannerChange, {
                banner: {
                    title: state.inputText,
                    style: {
                        color: state.inputColor
                    },
                    content: state.inputWysiwyg,
                    product_id: 6909270392971
                }
            })
                .then(() => router.push('/'));
        },
    },
    namespaced: true
}
