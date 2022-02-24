/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var GenericAdapter = /** @class */ (function () {
    function GenericAdapter() {
    }
    GenericAdapter.prototype.createState = function (_, initialState) {
        return initialState;
    };
    GenericAdapter.prototype.updateState = function (_, __) { };
    GenericAdapter.prototype.getState = function (_) {
        return null;
    };
    GenericAdapter.prototype.when = function (_, __) { };
    return GenericAdapter;
}());

var ReactAdapter = /** @class */ (function (_super) {
    __extends(ReactAdapter, _super);
    function ReactAdapter(init) {
        var _this = _super.call(this) || this;
        _this.useState = init.useState;
        // this.useEffect = init.useEffect;
        _this.states = {};
        _this.reactions = [];
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
        this.reactions.forEach(function (reaction) {
            if (reaction.condition())
                reaction.callback();
        });
    };
    ReactAdapter.prototype.when = function (condition, callback) {
        this.reactions.push({
            condition: function () { return condition; },
            callback: callback,
        });
    };
    return ReactAdapter;
}(GenericAdapter));

var STATE;
(function (STATE) {
    STATE["COUNT"] = "count";
})(STATE || (STATE = {}));

var initReact = function (initOptions) { return new ReactAdapter(initOptions); };

export { initReact };
