var STATE;
(function (STATE) {
    STATE["COUNT"] = "count";
})(STATE || (STATE = {}));
var Counter = /** @class */ (function () {
    function Counter(Adapter) {
        this.adapter = Adapter;
        this.count = this.adapter.createState(STATE.COUNT, 0);
        this.adapter.when(this.count > 10, this.whenGotTo10);
    }
    Counter.prototype.increment = function () {
        this.adapter.updateState(STATE.COUNT, function (count) { return count + 1; });
    };
    Counter.prototype.decrement = function () {
        this.adapter.updateState(STATE.COUNT, function (count) { return count - 1; });
    };
    Counter.prototype.whenGotTo10 = function () {
        this.adapter.updateState(STATE.COUNT, 0);
    };
    return Counter;
}());
export default Counter;
//# sourceMappingURL=index.js.map