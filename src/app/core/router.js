const createRouter = () => {
	const routes = {};

	const addRoute = (routeUrl, routeHandler) => {
		routes[routeUrl] = routeHandler;
	};

	const navigateToHashUrl = () => {

	};

	const handleRouting = () => {
		// i.e. http://www.awesome-site.io/#home => home
		const url = location.hash.slice(1);
		const routeHandler = routes[url];

		if (!routeHandler) {
			const otherwiseRoute = routes['*'];

			if (!otherwiseRoute) {
				throw new Error('No otherwise route was added');
			}

			otherwiseRoute();
			return;
		}

		routeHandler();
	};

	if (window) {
		window.addEventListener('hashchange', handleRouting);
		window.addEventListener('load', handleRouting);
	}

	return {addRoute, navigateToHashUrl};
};

export default createRouter;
