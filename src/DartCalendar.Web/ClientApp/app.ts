
import "bootstrap";
import "Content/scss/app.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./app-routes";
import store from "./store";
// import axios, { AxiosResponse } from "axios";
import { locator } from "./utility/servicelocator";

import { Container } from "inversify";
import "reflect-metadata";
import { DartEventDataService } from "./dataservices/DartEventDataService";
import { IDartEventDataService } from "./dataservices/IDartEventDataService";

Vue.use(VueRouter);

const container: Container = new Container();
container.bind<IDartEventDataService>("IDartEventDataService").to(DartEventDataService);
locator.setContainer(container);

/*
axios.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: any): any => {
        let path = document.location.pathname;
        if (error.response.status === 401) {
            localStorage.clear();
            let url = (path != null && path != undefined && path.length > 0) ? "/login?returnUrl=" + path : "/login";
            window.location.href = url;
        }

        return Promise.reject(error);
    }
);
*/

export default new Vue({
    el: "#app-root",
    render: (h) => h(require("./pages/home/home.vue").default),
    router: new VueRouter({ mode: "history", routes }),
    store,
});
