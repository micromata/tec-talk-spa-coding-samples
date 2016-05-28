import createRouter from './core/router.js';
const router = createRouter();

router.addRoute('home', () => {
	console.log('i am the home route');
});

router.addRoute('about', () => {
	console.log('i am the about route');
});
