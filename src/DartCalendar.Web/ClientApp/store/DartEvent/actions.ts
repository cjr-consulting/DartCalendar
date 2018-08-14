import { ActionTree } from "vuex";
import { IDartEventDataService } from "../../dataservices/IDartEventDataService";
import { locator } from "../../utility/servicelocator";
import { IBaseState } from "../types";
import { FETCH_DARTEVENTS, SET_DARTEVENTS } from "./types";
import { IDartEventState } from "./types";

export const actions: ActionTree<IDartEventState, IBaseState> = {
    [FETCH_DARTEVENTS]({ commit }: any ): void {
        const dartEventApi: IDartEventDataService = locator.resolve<IDartEventDataService>("IDartEventDataService");
        dartEventApi
            .getDartEvents()
            .then((result) => commit(SET_DARTEVENTS, result));
    },
};
