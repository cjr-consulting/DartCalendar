import { Module } from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { IDartEventState } from "./types";
import { IBaseState } from "../types";

const state: IDartEventState = {
    dartEvents: []
};

const namespaced: boolean = true;

export const namespace: string = "dartevent";

export const dartevent: Module<IDartEventState, IBaseState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};