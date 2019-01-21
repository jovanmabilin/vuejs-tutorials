import Vue from 'Vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import modules from './modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // state,
    // getters,
    // mutations,
    // actions,
    modules,
});