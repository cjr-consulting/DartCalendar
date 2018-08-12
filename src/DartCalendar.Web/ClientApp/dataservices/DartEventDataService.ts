import Axios from "axios";
import * as types from "../store/DartEvent/types";

export class DartEventDataService {
    getDartEvents(): Promise<Array<types.IDartEvent>> {
        let promise: Promise<Array<types.IDartEvent>> =
            new Promise<Array<types.IDartEvent>>(resolve => {
                let events: Array<types.IDartEvent> = new Array<types.IDartEvent>();
                events.push(new types.DartEvent("event 1", "address 1"));
                events.push(new types.DartEvent("event 2", "address 2"));
                events.push(new types.DartEvent("event 3", "address 3"));
                resolve(events);
        });
        return promise;
    }
}