import { MutationTree } from "vuex";
import { IDartEvent } from "./types";

import { SET_DARTEVENTS, IDartEventState } from "./types";


export const mutations: MutationTree<IDartEventState> = {
    [SET_DARTEVENTS](state: IDartEventState, payload:Array<IDartEvent>):void {
        state.dartEvents = payload;
    },

    // [FILTER_DARTEVENT](state: IDartEventState,) {
    //     state.harvesters = data;
    // }
};