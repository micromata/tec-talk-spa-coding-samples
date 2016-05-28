import createRouter from './core/router.js';
import HomeRoute from './home';
import AboutRoute from './about';

const router = createRouter('app');

router.addRoute('', () => {
	router.navigateToHashUrl('home');
});

router.addRoute('/', () => {
	router.navigateToHashUrl('home');
});

router.addRoute('home', HomeRoute.init);

router.addRoute('about', AboutRoute.init);

router.addRoute('*', () => {
	console.log('I am the otherwise route');
});
