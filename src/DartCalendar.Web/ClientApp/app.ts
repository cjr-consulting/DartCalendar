import "Content/scss/app.scss";
import "bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import { routes } from "./app-routes";
import axios, { AxiosResponse } from "axios";

Vue.use(VueRouter);

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
    store,
    router: new VueRouter({ mode: "history", routes: routes }),
    render: h => h(require("./pages/home/home.vue").default)
});
