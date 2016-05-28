import createRouter from './core/router.js';
import HomeRoute from './home';
import AboutRoute from './about';

const router = createRouter('app');

router.addRoute('', {init: () => {
	router.navigateToHashUrl('home');
}});

router.addRoute('/', {init: () => {
	router.navigateToHashUrl('home');
}});

router.addRoute('home', {init: HomeRoute.init, dispose: HomeRoute.dispose});

router.addRoute('about', {init: AboutRoute.init, dispose: AboutRoute.dispose});

router.addRoute('*', {init: () => {
	console.log('I am the otherwise route');
}});
