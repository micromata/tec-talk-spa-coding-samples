const init = $el => {
	$el.textContent = 'I am the home route';
};

const dispose = () => {
	console.log('disposing home route');
};

export default {init, dispose};
