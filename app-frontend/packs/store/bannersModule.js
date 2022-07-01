import axios from "axios";

export const bannersModule = {
    state() {
        return {
            isLoader: false,
            isDataLength: true,
            banners: [],
            inputText: '',
            inputColor: '',
            inputWysiwyg: '',
            idBanner: ''
        }
    },
    getters: {

    },
    mutations: {
        setLoader(state, value) {
            this.state.isLoader = value;
        },
        setData(state, data) {
            this.state.banners = data;
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
        setIdBanner(state, id) {
            this.state.idBanner = id;
        }
    },
    actions: {
        async fetchBanners({commit}) {
            commit('setLoader', true);
            axios.get('/api/v1/banners')
                .then((res) => {
                    if (res.data.data.length) {
                        commit('setDataLength', false);
                    } else {
                        commit('setDataLength', true);
                    }
                    commit('setData', res.data.data);
                })
            .finally( () => commit('setLoader', false))
        },
        async createBanner() {
            axios.post('/api/v1/banners', {
                banner: {
                    title: this.state.banners.inputText,
                    style: {
                        color: this.state.banners.inputColor
                            },
                    content: this.state.banners.inputWysiwyg,
                    product_id: 6909270392971
                }
            })
                .then( (res) => {
                    console.log(res)
                })
        },
        async deleteBanner({dispatch}) {
            axios.delete('/api/v1/banners/' + this.state.idBanner)
                .then( (res) => {
                    dispatch('fetchBanners');
                    console.log(res)
                })
        },
        async changeBanner() {
            axios.put('/api/v1/banners/' + this.state.idBanner, {
                banner: {
                    title: this.state.banners.inputText,
                    style: {
                        color: this.state.banners.inputColor
                    },
                    content: this.state.banners.inputWysiwyg,
                    product_id: 6909113532555
                }
            })
                .then( (res) => {
                    console.log(res)
                })
        },
    },
    namespaced: true

}
