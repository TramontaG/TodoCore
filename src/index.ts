import ReactAdapter, { InitReactAdapter } from './Adapters/ReactAdapter';
export * from './Counter';

export const initReact = (initOptions: InitReactAdapter) => new ReactAdapter(initOptions);
