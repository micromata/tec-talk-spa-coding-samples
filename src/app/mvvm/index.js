import {render} from '../core/rendering.js';
import ViewModel from './viewmodel';

const init = $el => {
	const viewModel = new ViewModel();

	fetch('app/mvvm/template.html')
		.then(response => response.text())
		.then(template => {
			render(template, viewModel, $el);
		});
};

const dispose = () => {
	console.log('disposing home route');
};

export default {init, dispose};
