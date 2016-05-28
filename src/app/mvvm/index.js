import {render} from '../core/rendering.js';

const init = $el => {
	fetch('app/mvvm/template.html')
		.then(response => response.text())
		.then(template => {
			render(template, null, $el);
		});
};

const dispose = () => {
	console.log('disposing home route');
};

export default {init, dispose};
