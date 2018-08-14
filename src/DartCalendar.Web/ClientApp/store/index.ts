import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { dartevent } from "./DartEvent";
import { IBaseState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<IBaseState> = {
    modules: {
        dartevent,
    },
    state: {
        version: "1.0.0",
    },
};

export default new Vuex.Store<IBaseState>(store);
