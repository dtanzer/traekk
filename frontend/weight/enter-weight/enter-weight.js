let enterWeightTemplate = document.getElementById('template-enter-weight');
if (window.ShadyCSS) { window.ShadyCSS.prepareTemplate(enterWeightTemplate, 'enter-weight'); }

class EnterWeight extends HTMLElement {
	constructor() {
		super();
		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }

		let shadowRoot = this.attachShadow({mode: 'open'});

		// Put the content of the template inside the shadow DOM.
		this.shadowRoot.appendChild(document.importNode(enterWeightTemplate.content, true));

		this.shadowRoot.getElementById('click-button').addEventListener('click', this._buttonClicked.bind(this));
	}

	_buttonClicked(event) {
		const weight = this.shadowRoot.getElementById('weight').value;
		window.weight.store.dispatch({
			type: 'WEIGHT_CHANGED',
			date: new Date(),
			weight,
		});
	}
}

window.customElements.define('enter-weight', EnterWeight);
