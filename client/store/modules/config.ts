import { ActionTree, MutationTree, GetterTree } from "vuex";

export const namespaced = true;

export enum Type {
    SET_SETTINGS = "SET_SETTINGS"
}

export interface State {
    settings: {
        [key: string]: string;
    };
}

export const state = (): State => ({
    settings: null
});
export const getters: GetterTree<State, any> = {};

export const actions: ActionTree<State, any> = {
    async load({ commit, state }) {
        if (state.settings) {
            return;
        }
        //[TODO: 此处需要获取到服务端的配置]

        const settings = { lang: "en" };
        commit(Type.SET_SETTINGS, settings);
    }
};

export const mutations: MutationTree<State> = {
    [Type.SET_SETTINGS](state, settings) {
        state.settings = settings;
    }
};
