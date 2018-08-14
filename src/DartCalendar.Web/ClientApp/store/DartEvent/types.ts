export const FETCH_DARTEVENTS: string = "dartevent/FETCH_DARTEVENTS";
export const SET_DARTEVENTS: string = "dartevent/SET_DARTEVENTS";
export const GET_DARTEVENTS: string = "dartevent/GET_DARTEVENTS";

export interface IDartEventState {
    dartEvents: IDartEvent[];
}

export interface IDartEvent {
    id: number;
    name: string;
    address: string;
}

export class DartEvent implements IDartEvent {
    id: number;
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.id = 0;
        this.name = name;
        this.address = address;
    }
}
