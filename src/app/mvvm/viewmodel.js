import observable from './_pattern/observable';

function ViewModel() {
	this.name = observable('René Viering');
	this.age = observable(29);
}

export default ViewModel;
