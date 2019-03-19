import get from 'lodash/get';
import NotFound from '@/admin/components/common/NotFound';
import role from '@/../common/config/role';
import Router from 'vue-router';
import store from './store';
import Users from '@/admin/components/users';
import Vue from 'vue';

Vue.use(Router);

// Handle 404
const fallbackRoute = { path: '*', component: NotFound };

const router = new Router({
  routes: [{
    path: '/',
    name: 'users',
    component: Users,
    meta: { auth: true }
  }, fallbackRoute]
});

router.beforeEach((to, from, next) => {
  const user = get(store.state, 'auth.user');
  const isNotAuthenticated = to.matched.some(it => it.meta.auth) && !user;
  const isNotAuthorized = user && user.role !== role.ADMIN;
  if (isNotAuthenticated || isNotAuthorized) return loadMainSpa();
  next();
});

const loadMainSpa = () => window.location.replace(window.location.origin);

export default router;
