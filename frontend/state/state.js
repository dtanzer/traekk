function reducer(state, event) {
	switch(event.type) {
		case 'WEIGHT_CHANGED':
			return {
				...state,
				previousWeights: [...state.previousWeights, { date: event.date, weight: event.weight }],
			};
	}
	return state;
}

if(window.weight == null) window.weight = {};
window.weight.store = {
	state: {
		previousWeights: [],
	},
	listeners: [],
	reducer,
	dispatch(event) {
		this.state = this.reducer(this.state, event);
		this.listeners.forEach(l => l(this.state));
	},
	onChange(listener) {
		this.listeners.push(listener);
		listener(this.state);
	},
};
