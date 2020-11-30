"use strict";
var State;
(function (State) {
    State[State["open"] = 0] = "open";
    State[State["closed"] = 1] = "closed";
    State[State["ajar"] = 2] = "ajar";
})(State || (State = {}));
console.log('enum string', State[State.closed]);
console.log('enum value', State.closed);
var StateString;
(function (StateString) {
    StateString["open"] = "open";
    StateString["closed"] = "closed";
    StateString["ajar"] = "ajar";
})(StateString || (StateString = {}));
console.log('enum state string', StateString[StateString.open]);
console.log('enunb state value', StateString.open);
//# sourceMappingURL=hello.js.map