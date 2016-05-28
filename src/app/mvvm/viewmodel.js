import observable from './_pattern/observable';

function ViewModel() {
	this.name = observable('René Viering');
	this.age = observable(29);
	this.counter = observable(0);
	this.city = observable('Kassel');

	this.increment = () => {
		this.counter.set(this.counter.get() + 1);
	};

	this.decrement = () => {
		this.counter.set(this.counter.get() - 1);
	};
}

export default ViewModel;
