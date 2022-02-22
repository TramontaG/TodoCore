var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import GenericAdapter from '../GenericAdapter';
var ReactAdapter = /** @class */ (function (_super) {
    __extends(ReactAdapter, _super);
    function ReactAdapter(init) {
        var _this = _super.call(this) || this;
        _this.useState = init.useState;
        _this.useEffect = init.useEffect;
        _this.states = {};
        return _this;
    }
    ReactAdapter.prototype.createState = function (stateName, initialState) {
        this.states[stateName] = this.useState(initialState);
        var reactiveState = this.states[stateName][0];
        return reactiveState;
    };
    ReactAdapter.prototype.getState = function (stateName) {
        return this.states[stateName][0];
    };
    ReactAdapter.prototype.updateState = function (stateName, newState) {
        var updateFn = this.states[stateName][1];
        updateFn(newState);
    };
    ReactAdapter.prototype.when = function (condition, cb) {
        this.useEffect(cb, [condition]);
    };
    return ReactAdapter;
}(GenericAdapter));
export default ReactAdapter;
//# sourceMappingURL=index.js.map