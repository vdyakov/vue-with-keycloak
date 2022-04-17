import { createStore, Store } from 'vuex';
import user, { UserStateType } from '@/store/modules/user';
import todo, { TodoStateType } from '@/store/modules/todo';

export interface StateType {
  user: UserStateType,
  todo: TodoStateType,
}

const store: Store<StateType> = createStore({
  modules: { user, todo },
});

export default store;
