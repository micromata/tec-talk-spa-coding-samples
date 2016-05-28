import createRouter from './core/router.js';
const router = createRouter();

router.addRoute('', () => {
	router.navigateToHashUrl('home');
});

router.addRoute('/', () => {
	router.navigateToHashUrl('home');
});

router.addRoute('home', () => {
	console.log('i am the home route');
});

router.addRoute('about', () => {
	console.log('i am the about route');
});

router.addRoute('*', () => {
	console.log('I am the otherwise route');
});
