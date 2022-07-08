export const MUTATIONS = {
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
        setIdProduct(state, value) {
            state.idProduct = value;
        },
        setIdBanner(state, value) {
            state.idBanner = value;
        },
        setTitleProduct(state, value) {
            state.titleProduct = value;
        },
        setImgProduct(state, value) {
            state.imgProduct = value;
        }
    }
}
