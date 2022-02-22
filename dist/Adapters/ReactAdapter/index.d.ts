import React, { Dispatch, SetStateAction } from 'react';
import GenericAdapter from '../GenericAdapter';
import Adapter from '../GenericAdapter';
export interface InitReactAdapter {
    useState: typeof React.useState;
    useEffect: typeof React.useEffect;
}
declare type StateMap = {
    [key: string]: [any, Dispatch<SetStateAction<any>>];
};
declare class ReactAdapter extends GenericAdapter implements Adapter {
    useState: typeof React.useState;
    useEffect: typeof React.useEffect;
    states: StateMap;
    constructor(init: InitReactAdapter);
    createState<T>(stateName: string, initialState: T): any;
    getState(stateName: string): any;
    updateState<T>(stateName: string, newState: Dispatch<SetStateAction<T>>): void;
    when(condition: boolean, cb: () => void): void;
}
export default ReactAdapter;
