interface Adapter {
    createState<T>(stateName: string, initialState: T): T;
    updateState<T>(stateName: string, newState: T): void;
    getState<T>(stateName: string): T;
    when(condition: boolean, cb: () => void): void;
}
declare abstract class GenericAdapter implements Adapter {
    constructor();
    createState<T>(_: string, initialState: T): T;
    updateState(_: string, __: any): void;
    getState<T>(_: string): T;
    when(_: boolean, __: () => void): void;
}
export default GenericAdapter;
