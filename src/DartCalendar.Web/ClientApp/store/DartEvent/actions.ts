import { ActionTree } from "vuex";
import { FETCH_DARTEVENTS, SET_DARTEVENTS } from "./types";
import { IDartEventState, IDartEvent, DartEvent } from "./types";
import { IBaseState } from "../types";
import { DartEventDataService } from "../../dataservices/DartEventDataService";


export const actions: ActionTree<IDartEventState, IBaseState> = {
    [FETCH_DARTEVENTS]({ commit }: any ): void {
        new DartEventDataService()
            .getDartEvents()
            .then(result => commit(SET_DARTEVENTS, result));
    }
};