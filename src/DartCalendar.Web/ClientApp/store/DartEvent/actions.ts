import { ActionTree } from "vuex";
import { FETCH_DARTEVENTS, SET_DARTEVENTS } from "./types";
import { IDartEventState, IDartEvent, DartEvent } from "./types";
import { IBaseState } from "../types";
import { locator } from "../../utility/servicelocator";
import { IDartEventDataService } from "../../dataservices/IDartEventDataService";



export const actions: ActionTree<IDartEventState, IBaseState> = {
    [FETCH_DARTEVENTS]({ commit }: any ): void {
        let dartEventApi: IDartEventDataService = locator.resolve<IDartEventDataService>("IDartEventDataService");
        dartEventApi
            .getDartEvents()
            .then(result => commit(SET_DARTEVENTS, result));
    }
};