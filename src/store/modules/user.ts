import { StateType } from '@/store';
import { Module } from 'vuex';
import { VueKeycloakTokenParsed } from '@dsb-norge/vue-keycloak-js/dist/types';

export interface UserStateType {
  attributes: VueKeycloakTokenParsed,
  token?: string | null,
}

const initialState: UserStateType = {
  attributes: {
    family_name: '',
    given_name: '',
    middle_name: '',
    preferred_username: '',
    email: '',
    realm_access: {
      roles: [],
    },
    resource_access: {},
  },
  token: null,
};

const userModule: Module<UserStateType, StateType> = {
  namespaced: true,
  state: initialState,
  getters: {
    fullName: (state): string => {
      return `${state.attributes.family_name} ${state.attributes.given_name} ${state.attributes.middle_name}`;
    },
  },
  mutations: {
    setUserData(state, user) {
      state.attributes = { ...state.attributes, ...user };
    },
    setUserToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async loadUserData({ commit }, userData: VueKeycloakTokenParsed) {
      commit('setUserData', userData);
    },
    async loadUserToken({ commit }, token: string) {
      commit('setUserToken', token);
    },
  },
};

export default userModule;