import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { IBaseState } from "./types";
import { dartevent } from "./DartEvent";

Vue.use(Vuex);

const store: StoreOptions<IBaseState> = {
    state: {
        version: "1.0.0"
    },
    modules: {
        dartevent
    }
};

export default new Vuex.Store<IBaseState>(store);