import auth from '@/common/store/modules/auth';
import { auth as authPlugin } from '@/common/store/plugins';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [authPlugin({ key: 'APP_USER' })],
  strict: !isProduction
});
