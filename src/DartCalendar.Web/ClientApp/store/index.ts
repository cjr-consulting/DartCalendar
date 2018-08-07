import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { BaseState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<BaseState> = {
    state: {
        version: "1.0.0"
    },
    modules: {
    }
};

export default new Vuex.Store<BaseState>(store);