let quickWeightStatsTemplate = document.getElementById('template-quick-weight-stats');
if (window.ShadyCSS) { window.ShadyCSS.prepareTemplate(quickWeightStatsTemplate, 'quick-weight-stats'); }

class QuickWeightStats extends HTMLElement {
	constructor() {
		super();
		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }

		let shadowRoot = this.attachShadow({mode: 'open'});

		// Put the content of the template inside the shadow DOM.
		this.shadowRoot.appendChild(document.importNode(quickWeightStatsTemplate.content, true));
	}

	connectedCallback() {
		window.weight.store.onChange(this._stateChanged.bind(this));
	}

	_stateChanged(state) {
		const weights = state.previousWeights;
		const result = '<ul>'+
			weights
				.map(weight => '<li>'+weight.date+': <strong>'+weight.weight+'</strong></li>')
				.join('\n');
			+'</ul>';
		this.innerHTML = result;
	}
}

window.customElements.define('quick-weight-stats', QuickWeightStats);
