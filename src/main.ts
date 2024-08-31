import App from '@/App.vue';
import '@/styles/reset.css';
import router from '@/router';
import pinia from '@/store';
import '@/styles/index.less';
import * as Sentry from '@sentry/vue';
import { name, version } from '@/../package.json';
console.log(`${name}-${version}`);
const app = createApp(App);
app.use(router);
app.use(pinia);
Sentry.init({
	app,
	release: `${name}${version}`,
	dsn: 'https://47c88cb5e695cc56f8e7c1f111006000@o4507842408939520.ingest.us.sentry.io/4507842425520128',
	integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
	// Tracing
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.mount('#app');
