import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter } from "vuex-class";
import * as types from "ClientApp/store/DartEvent/types";

const namespace: string = "dartevent";
@Component
export default class HomeComponent extends Vue {
    @State("dartevent") DartEvent!: types.IDartEventState;
    @Action(types.FETCH_DARTEVENTS, { namespace }) fetchDartEvents: any;
    @Getter(types.GET_DARTEVENTS, { namespace }) dartEvents!: Array<types.IDartEvent>;

    constructor() {
        super();
    }

    mounted(): void {
        this.fetchDartEvents();
    }
}