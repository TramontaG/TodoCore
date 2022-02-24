import React from 'react';
import GenericAdapter from '../GenericAdapter';
import Adapter from '../GenericAdapter';
export interface InitReactAdapter {
    useState: typeof React.useState;
    useEffect: typeof React.useEffect;
}
declare type UpdateStateFnParams<T> = T | ((value: T) => T);
declare class ReactAdapter extends GenericAdapter implements Adapter {
    private useState;
    private states;
    private reactions;
    constructor(init: InitReactAdapter);
    createState<T>(stateName: string, initialState: T): any;
    getState(stateName: string): any;
    updateState<T>(stateName: string, newState: UpdateStateFnParams<T>): void;
    when(condition: boolean, callback: () => void): void;
}
export default ReactAdapter;
