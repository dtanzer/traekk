let dashboardHeaderTemplate = document.getElementById('template-dashboard-header');
if (window.ShadyCSS) { window.ShadyCSS.prepareTemplate(dashboardHeaderTemplate, 'dashboard-header'); }

class DashboardHeader extends HTMLElement {
	constructor() {
		super();
		if (window.ShadyCSS) { window.ShadyCSS.styleElement(this); }

		let shadowRoot = this.attachShadow({mode: 'open'});

		// Put the content of the template inside the shadow DOM.
		this.shadowRoot.appendChild(document.importNode(dashboardHeaderTemplate.content, true));
	}
}

window.customElements.define('dashboard-header', DashboardHeader);
