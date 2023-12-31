import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faListUl,
  faSquareCheck,
  faBox,
  faCcAmazonPay,
  faCcDiscover,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faEnvelope,
  faStar,
  faCircle,
  faAngleRight,
  faAngleLeft,
  faMagnifyingGlass,
  faCartShopping,
  faAngleDown,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube
);

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
