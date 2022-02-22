import GenericAdapter from '../Adapters/GenericAdapter';
declare class Counter {
    adapter: GenericAdapter;
    count: number;
    constructor(Adapter: GenericAdapter);
    increment(): void;
    decrement(): void;
    whenGotTo10(): void;
}
export default Counter;
