import { RootState, Person } from "~/types";
import Vuex, { MutationTree, ActionTree, Store as VuexStore } from "vuex";

import { containerSetter } from "~/services/container";
import { containerBuilder } from "~/services/container.builder";

import * as config from "./modules/config";
import { State as ConfigState } from "./modules/config";

export type Store = VuexStore<RootState>;
export type Config = ConfigState;

// export const state = (): RootState => ({
//     people: []
// });

// export const mutations: MutationTree<RootState> = {
//     setPeople(state: RootState, people: Person[]): void {
//         state.people = people;
//     }
// };

// export const actions: ActionTree<RootState, RootState> = {
//     async nuxtServerInit({ commit }, context) {
//         let people: Person[] = [];

//         // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
//         people = context.isStatic
//             ? localRandomData
//             : await context.app.$axios.$get("./random-data.json");

//         commit("setPeople", people.slice(0, 10));
//     }
// };

const createStore = () => {
    const store: Store = new Vuex.Store({
        modules: {
            config
        }
    });

    containerSetter(containerBuilder(store));
    return store;
};

export default createStore;
