const init = $el => {
	$el.textContent = 'I am the about route';
};

const dispose = () => {
	console.log('disposing about route');
};

export default {init, dispose};
