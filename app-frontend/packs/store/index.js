import { createStore } from 'vuex';
import { ACTIONS } from './actions';
import { MUTATIONS } from './mutations';
import { STATES } from './states';

export default createStore({
    state: STATES.state,
    actions: ACTIONS.actions,
    mutations: MUTATIONS.mutations
});
