import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter, State } from "vuex-class";
import * as types from "../../store/DartEvent/types";

const namespace: string = "dartevent";
@Component
export default class HomeComponent extends Vue {
    @State(namespace) DartEvent!: types.IDartEventState;
    @Action(types.FETCH_DARTEVENTS, { namespace }) fetchDartEvents: any;
    @Getter(types.GET_DARTEVENTS, { namespace }) dartEvents!: types.IDartEvent[];

    constructor() {
        super();
    }

    mounted(): void {
        this.fetchDartEvents();
    }
}
