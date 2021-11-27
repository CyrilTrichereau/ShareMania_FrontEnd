import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faNewspaper,
  faBars,
  faUser,
  faCommentAlt,
  faShare,
  faSnowflake,
  faFire,
  faFireAlt,
  faBurn,
  faEllipsisH,
  faShieldAlt,
  faHome,
  faAddressCard,
  faSignOutAlt,
  faEye,
  faEyeSlash,
  faUserAstronaut,
  faSearch,
  faThumbtack,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import Bootstrapp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/custom.scss";

// Set up fontawesome library
library.add(
  faPlusCircle,
  faNewspaper,
  faBars,
  faUser,
  faCommentAlt,
  faShare,
  faSnowflake,
  faFire,
  faFireAlt,
  faBurn,
  faEllipsisH,
  faShieldAlt,
  faHome,
  faAddressCard,
  faSignOutAlt,
  faEye,
  faEyeSlash,
  faUserAstronaut,
  faSearch,
  faThumbtack,
  faEnvelope
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
