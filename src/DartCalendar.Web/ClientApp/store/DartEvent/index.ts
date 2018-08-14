import { Module } from "vuex";
import { IBaseState } from "../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { IDartEventState } from "./types";

const state: IDartEventState = {
    dartEvents: [],
};

const namespaced: boolean = true;

export const namespace: string = "dartevent";

export const dartevent: Module<IDartEventState, IBaseState> = {
    actions,
    getters,
    mutations,
    namespaced,
    state,
};
