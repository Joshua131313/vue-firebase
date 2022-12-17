import { auth } from './Fire';
import {
    provide,
    reactive,
    readonly,
    toRefs,
    watchEffect,
  } from 'vue';
  
  // We use symbols as unique identifiers.
  export const StoreContextState = Symbol('Store context state provider identifier');
  export const StoreContextUpdate = Symbol('Store context update provider identifier');
  
  export default {
    setup() {
      const state = reactive({
        user: '',
        firebaseLoaded: false,
      });

      const authListener = () => {
        auth.onAuthStateChanged((user)=> {
          if(user) {
            state.user = user
          }
          else {
            state.user = ''
          }
          state.firebaseLoaded = true
        })
      }
      watchEffect(()=> {
        authListener()
      })
      provide(StoreContextState, toRefs(readonly(state)));
  
      const update = (property, value) => {
        state[property] = value;
      };
      provide(StoreContextUpdate, update);
    },
    render() {
      // Our provider component is a renderless component
      // it does not render any markup of its own.
      return this.$slots.default();
    },
  }