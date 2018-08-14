import Vue from "vue";
import Component from "vue-class-component";

/*
@Component({
    components: {
        aF: require('../appfooter/appfooter.vue').default,
        appNav: require('../nav/appnav.vue').default,
        leftPanel: require('../leftpanel/leftpanel.vue').default
    },
    computed: {
        isLogIn() {
            return localStorage.getItem("authToken");
        }
    }
})

*/
@Component
export default class AppComponent extends Vue {
    name: string = "component-data NEW";
}
