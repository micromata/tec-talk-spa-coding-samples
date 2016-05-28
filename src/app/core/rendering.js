import handlebars from 'handlebars';

export function render(template, data, domElement) {
	var renderTemplate = handlebars.compile(template);
	domElement.innerHTML = renderTemplate(data);
}
