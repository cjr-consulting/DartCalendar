import VueRouter, { RouteConfig } from "vue-router";

/*
class RouteGuard {
    beforeRouteEnter(to: any, from: any, next: any) {
        var authToken = localStorage.getItem("authToken");
        if (authToken) {
            next();
        }

        else {
            var path = document.location.pathname;
            var url = (path != null && path != undefined && path.length > 0) ? "/login?returnUrl=" + path : "/login";
            window.location.href = url;
        }
    }
}
let routeGuard = new RouteGuard();

class Authorized {
    beforeRouteEnter(to: any, from: any, next: any) {
        var authToken = localStorage.getItem("authToken");
        if (authToken)
            next("/home");
        else
            next();
    }
}
let authorized = new Authorized();
*/
export const routes:
 RouteConfig[] =
    [
        { path: "/", component: require("./pages/home/home.vue").default },
    ];
