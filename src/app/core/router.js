const createRouter = domEntryPointSelector => {
	const routes = {};
	const domEntryPoint = document.getElementById(domEntryPointSelector);
	let currentRouteUrl;

	const addRoute = (routeUrl, routeHandler) => {
		routes[routeUrl] = routeHandler;
	};

	const navigateToHashUrl = hashUrl => {
		location.hash = hashUrl;
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

		if (currentRouteUrl) {
			if (routes[currentRouteUrl].dispose) {
				routes[currentRouteUrl].dispose();
			}
		}

		routeHandler.init(domEntryPoint);

		currentRouteUrl = url;
	};

	if (window) {
		window.addEventListener('hashchange', handleRouting);
		window.addEventListener('load', handleRouting);
	}

	return {addRoute, navigateToHashUrl};
};

export default createRouter;
