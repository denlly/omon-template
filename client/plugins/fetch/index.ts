/**
 * both injected
 */
import { $axios } from "./vue-axios";

export default ({ app }, inject) => {
    inject("fetch", $axios);
};
