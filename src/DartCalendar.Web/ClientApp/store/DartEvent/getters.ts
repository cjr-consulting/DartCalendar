import { GetterTree } from "vuex";
import { GET_DARTEVENTS } from "./types";
import { IDartEventState, IDartEvent } from "./types";
import { IBaseState } from "../types";

export const getters: GetterTree<IDartEventState, IBaseState> = {
    [GET_DARTEVENTS] (state: IDartEventState): Array<IDartEvent> {
        return state.dartEvents;
    }
};
