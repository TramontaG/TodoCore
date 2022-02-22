interface Adapter {
	createState<T>(stateName: string, initialState: T): T;
	updateState<T>(stateName: string, newState: T): void;
	getState<T>(stateName: string): T;
	when(condition: boolean, cb: () => void): void;
}

abstract class GenericAdapter implements Adapter {
	constructor() {}
	createState<T>(_: string, initialState: T) {
		return initialState;
	}
	updateState(_: string, __: any) {}
	getState<T>(_: string) {
		return null as unknown as T;
	}
	when(_: boolean, __: () => void) {}
}

export default GenericAdapter;
