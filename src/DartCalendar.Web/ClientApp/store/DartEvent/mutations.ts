import { MutationTree } from "vuex";
import { IDartEvent } from "./types";

import { IDartEventState, SET_DARTEVENTS } from "./types";

export const mutations: MutationTree<IDartEventState> = {
    [SET_DARTEVENTS](state: IDartEventState, payload: IDartEvent[]): void {
        state.dartEvents = payload;
    },

    // [FILTER_DARTEVENT](state: IDartEventState,) {
    //     state.harvesters = data;
    // }
};
