import {
  generateId,
  loadFromLocalStorage,
  saveToLocalStorage
} from '@/utils/utils';
import { Module } from 'vuex';
import { StateType } from '@/store';

export interface TodoItemType {
  id: string,
  text: string,
  isDone: boolean,
}

export interface TodoStateType {
  list: TodoItemType[]
}

const initialState: TodoStateType = {
  list: []
};

const userModule: Module<TodoStateType, StateType> = {
  namespaced: true,
  state: initialState,
  getters: {
    list: (state): TodoItemType[] => {
      return state.list;
    },
  },
  mutations: {
    setTodoList(state, list: TodoItemType[]) {
      state.list = list;
    },
    setTodoItem(state, item: TodoItemType) {
      state.list = [...state.list, item];
    }
  },
  actions: {
    async save({ state }) {
      saveToLocalStorage(state.list);
    },
    async create({ dispatch, commit }, text: string) {
      if (text === '') return;

      const id = generateId();

      commit('setTodoItem', { id, text, isDone: false });

      dispatch('save');
    },
    async toggle({ dispatch, state, commit }, id: string) {
      const newTodoList: TodoItemType[] = state.list.map((item: TodoItemType) => {
        if (item.id === id) {
          return { ...item, ...{ isDone: !item.isDone } }
        }

        return item;
      });

      commit('setTodoList', newTodoList);

      dispatch('save');
    },
    async remove({ dispatch, state, commit }, id: string) {
      const newTodoList: TodoItemType[] = state.list.filter(item => item.id !== id);

      commit('setTodoList', newTodoList);

      dispatch('save');
    },
    async loadTodoList({ commit }) {
      commit('setTodoList', loadFromLocalStorage());
    },
  },
};

export default userModule;