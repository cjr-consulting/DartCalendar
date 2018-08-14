import Axios from "axios";
import { inject, injectable } from "inversify";
import * as types from "../store/DartEvent/types";
import { IDartEventDataService } from "./IDartEventDataService";

@injectable()
export class DartEventDataService implements IDartEventDataService {
    getDartEvents(): Promise<types.IDartEvent[]> {
        const promise: Promise<types.IDartEvent[]> =
            new Promise<types.IDartEvent[]>((resolve) => {
                const events: types.IDartEvent[] = new Array<types.IDartEvent>();
                events.push(new types.DartEvent("event 1", "address 1"));
                events.push(new types.DartEvent("event 2", "address 2"));
                events.push(new types.DartEvent("event 3", "address 3"));
                resolve(events);
        });
        return promise;
    }
}
