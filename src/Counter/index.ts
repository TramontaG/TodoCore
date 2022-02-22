import GenericAdapter from '../Adapters/GenericAdapter';

enum STATE {
	COUNT = 'count',
}

class Counter {
	adapter: GenericAdapter;
	count: number;

	constructor(Adapter: GenericAdapter) {
		this.adapter = Adapter;
		this.count = this.adapter.createState(STATE.COUNT, 0);

		this.adapter.when(this.count > 10, this.whenGotTo10);
	}

	increment() {
		this.adapter.updateState(STATE.COUNT, (count: number) => count + 1);
	}

	decrement() {
		this.adapter.updateState(STATE.COUNT, (count: number) => count - 1);
	}

	whenGotTo10() {
		this.adapter.updateState(STATE.COUNT, 0);
	}
}

export default Counter;
