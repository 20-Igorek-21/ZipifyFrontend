import axios from "axios";

export const bannersModule = {
    state() {
        return {
            isLoader: false,
            isDataLength: true,
            banners: [],
            inputText: String,
            inputColor: '#FFF',
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
                    title: 'bghgjk,',
                    style: {
                        color: 'blue'
                            },
                    content: 25634,
                    product_id: 6909270392971
                }
            })
                .then( () => {})
        },
        async deleteBanner(id) {
            axios.delete('/api/v1/banners/'+ id)
                .then( (res) => console.log(res))
        },
        async changeBanner() {
            axios.put('/api/v1/banners/545252', {
                banner: {
                    title: 'bghgjk,',
                    style: {
                        color: 'blue'
                            },
                    content: 25634,
                    product_id: 6909113532555
                }
            })
                .then( () => {})
        },
    },
    namespaced: true
}
