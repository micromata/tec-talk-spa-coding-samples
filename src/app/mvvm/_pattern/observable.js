const observable = initialValue => {
	let value = initialValue;

	const subscribers = [];

	const subscribe = subscriber => {
		subscribers.push(subscriber);
	};

	const get = () => value;

	const set = newValue => {
		value = newValue;
		subscribers.forEach(subscriber => subscriber());
	};

	return {subscribe, get, set};
};

export default observable;
