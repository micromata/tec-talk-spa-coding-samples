import $ from 'jquery';

const applyDataBinding = viewModel => {

	const applyBindingFromModelToDom = () => {

		const onViewModelPropertyChanged = propertyName => {
			// Get the newest value of the viewmodel property
			const newValue = viewModel[propertyName].get();

			// Get the DOM Element with the correct propertyName
			const selector = `[data-bind='${propertyName}']`;

			// set the new value
			$(selector).html(newValue);
			$(selector).val(newValue);
		};

		Object.keys(viewModel).forEach(propertyName => {
			if (typeof (viewModel[propertyName].subscribe) !== 'undefined') {
				viewModel[propertyName].subscribe(() => {

					onViewModelPropertyChanged(propertyName);

				});

				onViewModelPropertyChanged(propertyName);
			}
		});

	};

	const applyBindingFromDomToModel = () => {
		$(document).off('input.applyDatabinding');
		$(document).on('input.applyDatabinding', evt => {
			const attr = $(evt.target).attr('data-bind');
			if (typeof (viewModel[attr]) !== 'undefined') {
				viewModel[attr].set(evt.target.value);
			}
		});
	};

	applyBindingFromModelToDom();
	applyBindingFromDomToModel();
};

export default applyDataBinding;
