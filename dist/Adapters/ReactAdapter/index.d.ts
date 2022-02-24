import React from 'react';
import GenericAdapter from '../GenericAdapter';
import Adapter from '../GenericAdapter';
export interface InitReactAdapter {
    useState: typeof React.useState;
    useEffect: typeof React.useEffect;
}
declare type UpdateStateFnParams<T> = (value: T) => T | T;
declare type StateMap = {
    [key: string]: [any, (p: UpdateStateFnParams<any>) => void];
};
declare class ReactAdapter extends GenericAdapter implements Adapter {
    useState: typeof React.useState;
    useEffect: typeof React.useEffect;
    states: StateMap;
    constructor(init: InitReactAdapter);
    createState<T>(stateName: string, initialState: T): any;
    getState(stateName: string): any;
    updateState<T>(stateName: string, newState: UpdateStateFnParams<T>): void;
    when(condition: boolean, cb: () => void): void;
}
export default ReactAdapter;
