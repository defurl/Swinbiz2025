import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'
import { animationDirectives } from './utils/animations';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.use(router);
app.use(animationDirectives);

// Global route transition
router.beforeEach((to, from, next) => {
  // Add a small delay to allow for route transitions
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
  next();
});

app.mount('#app');

