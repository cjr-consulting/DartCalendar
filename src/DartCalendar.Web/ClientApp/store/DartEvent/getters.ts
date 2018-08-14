import { GetterTree } from "vuex";
import { IBaseState } from "../types";
import { GET_DARTEVENTS } from "./types";
import { IDartEvent, IDartEventState } from "./types";

export const getters: GetterTree<IDartEventState, IBaseState> = {
    [GET_DARTEVENTS](state: IDartEventState): IDartEvent[] {
        return state.dartEvents;
    },
};
