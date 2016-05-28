import {render} from '../core/rendering.js';
import ViewModel from './viewmodel';
import applyDataBinding from './_pattern/applyDatabinding';
import $ from 'jquery';

const registerEvents = viewModel => {
	$('#increment').on('click', () => {
		viewModel.increment();
	});

	$('#decrement').on('click', () => {
		viewModel.decrement();
	});
};

const init = $el => {
	const viewModel = new ViewModel();

	fetch('app/mvvm/template.html')
		.then(response => response.text())
		.then(template => {
			render(template, viewModel, $el);
			applyDataBinding(viewModel);
			registerEvents(viewModel);
		});
};

const dispose = () => {
	$('#increment').off('click');
	$('#decrement').off('click');
};

export default {init, dispose};
