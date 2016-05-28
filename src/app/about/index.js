import {render} from '../core/rendering.js';

const init = $el => {
	fetch('app/about/template.html')
		.then(response => response.text())
		.then(template => {
			render(template, null, $el);
		});
};

const dispose = () => {
	console.log('disposing about route');
};

export default {init, dispose};
