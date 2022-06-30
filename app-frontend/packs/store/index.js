import { createStore } from 'vuex';
import { bannersModule } from './bannersModule';

export default createStore({
    modules: {
        banners: bannersModule
    }
})
