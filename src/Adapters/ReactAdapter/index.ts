import React from 'react';
import GenericAdapter from '../GenericAdapter';
import Adapter from '../GenericAdapter';

export interface InitReactAdapter {
	useState: typeof React.useState;
	useEffect: typeof React.useEffect;
}

type UpdateStateFnParams<T> = T | ((value: T) => T);

type StateMap = {
	[key: string]: [any, (p: UpdateStateFnParams<any>) => void];
};

class ReactAdapter extends GenericAdapter implements Adapter {
	useState: typeof React.useState;
	useEffect: typeof React.useEffect;
	states: StateMap;

	constructor(init: InitReactAdapter) {
		super();
		this.useState = init.useState;
		this.useEffect = init.useEffect;
		this.states = {};
	}

	createState<T>(stateName: string, initialState: T) {
		this.states[stateName] = this.useState<T>(initialState);
		const reactiveState = this.states[stateName][0];
		return reactiveState;
	}

	getState(stateName: string) {
		return this.states[stateName][0];
	}

	updateState<T>(stateName: string, newState: UpdateStateFnParams<T>) {
		const updateFn = this.states[stateName][1];
		updateFn(newState);
	}

	when(condition: boolean, cb: () => void) {
		this.useEffect(cb, [condition]);
	}
}

export default ReactAdapter;
