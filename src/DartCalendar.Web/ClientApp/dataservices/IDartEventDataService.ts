import { IDartEvent } from "../store/DartEvent/types";

export const DataEventApi: string = "DataEventApi";

export interface IDartEventDataService {
    getDartEvents(): Promise<IDartEvent[]>;
}
