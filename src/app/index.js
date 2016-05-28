import createRouter from './core/router.js';
import HomeRoute from './home';
import AboutRoute from './about';
import MVVMRoute from './mvvm';

const router = createRouter('app');

router.addRoute('', {init: () => {
	router.navigateToHashUrl('home');
}});

router.addRoute('/', {init: () => {
	router.navigateToHashUrl('home');
}});

router.addRoute('home', {init: HomeRoute.init, dispose: HomeRoute.dispose});

router.addRoute('about', {init: AboutRoute.init, dispose: AboutRoute.dispose});

router.addRoute('mvvm', {init: MVVMRoute.init, dispose: MVVMRoute.dispose});

router.addRoute('*', {init: () => {
	console.log('I am the otherwise route');
}});
