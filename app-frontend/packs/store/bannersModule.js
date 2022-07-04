import axios from "axios";
import router from "../router/router";

export const bannersModule = {
    state() {
        return {
            isLoader: '',
            isDataLength: true,
            dataBanners: [],
            dataBanner: [],
            inputText: '',
            inputColor: '',
            inputWysiwyg: '',
            inputWysiwygLength: 0,
            idBannerDelete: null,
            idBannerChange: null
        }
    },
    mutations: {
        setLoader(state, value) {
            this.state.isLoader = value;
        },
        setDataBanners(state, data) {
            this.state.dataBanners = data;
        },
        setDataBanner(state, data) {
            this.state.dataBanner = data;
        },
        setDataLength(state, value) {
            this.state.isDataLength = value;
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
        setInputWysiwygLength(state, value) {
            state.inputWysiwygLength = value;
        },
        setIdBannerDelete(state, id) {
            this.state.idBannerDelete = id;
        },
        setIdBannerChange(state, id) {
            this.state.idBannerChange = id;
        }
    },
    actions: {
        fetchBanners({commit}) {
            commit('setLoader', true);
            axios.get('/api/v1/banners')
                .then((res) => {
                    if (res.data.data.length) {
                        commit('setDataLength', false);
                    } else {
                        commit('setDataLength', true);
                    }
                    commit('setDataBanners', res.data.data);
                })
                .finally(() => commit('setLoader', false))
        },
        fetchBanner({commit}) {
            commit('setLoader', true);
            axios.get('/api/v1/banners/'+ this.state.idBannerChange)
                .then((res) => {
                    commit('setDataBanner', res.data.data);
                    router.push('editor');
                })
                .finally(() => commit('setLoader', false))
        },
        createBanner({dispatch}) {
            axios.post('/api/v1/banners', {
                banner: {
                    title: this.state.banners.inputText,
                    style: {
                        color: this.state.banners.inputColor
                    },
                    content: this.state.banners.inputWysiwyg,
                    product_id: 6909106094219
                }
            })
                .then((res) => {
                    dispatch('clearFields')
                    console.log(res)
                })
        },
        deleteBanner({commit, dispatch}) {
            commit('setLoader', true);
            axios.delete('/api/v1/banners/' + this.state.idBannerDelete)
                .then((res) => {
                    dispatch('fetchBanners');
                    console.log(res)
                })
                .finally(() => commit('setLoader', false))
        },
        changeBanner() {
            axios.put('/api/v1/banners/' + this.state.idBannerChange, {
                banner: {
                    title: this.state.banners.inputText,
                    style: {
                        color: this.state.banners.inputColor
                    },
                    content: this.state.banners.inputWysiwyg,
                    product_id: 6909106094219
                }
            })
                .then((res) => {
                    console.log(res)

                })
        },
        clearFields({commit}) {
            commit('setInputText', '');
            commit('setInputColor', '#FFFFFF');
            commit('setInputWysiwyg', '');
        }
    },
    namespaced: true

}
