const applyDataBinding = viewModel => {

	const applyBindingFromModelToDom = () => {

		Object.keys(viewModel).forEach(propertyName => {
			if (typeof (viewModel[propertyName].subscribe) !== 'undefined') {
				viewModel[propertyName].subscribe(() => {

					// Get the newest value of the viewmodel property
					const newValue = viewModel[propertyName].get();

					// Get the DOM Element with the correct propertyName
					const selector = `[data-bind='${propertyName}']`;

					// set the new value
					$(selector).html(newValue);
					$(selector).val(newValue);

				});
			}
		});

	};

	applyBindingFromModelToDom();
};

export default applyDataBinding;
