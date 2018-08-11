import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AppComponent extends Vue {
    dartEvents: Array<DartEvent>;
    name: string = "component-data";

    constructor(){
        super();
        this.dartEvents = new Array<DartEvent>();
    }

    bind(){
        this.dartEvents.push(new DartEvent("event 1", "address 1"));
        this.dartEvents.push(new DartEvent("event 2", "address 2"));
        this.dartEvents.push(new DartEvent("event 3", "address 3"));
    }
}

class DartEvent {
    name: string;
    address: string;
    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}
