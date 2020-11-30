enum State {
    open,
    closed,
    ajar
}

console.log('enum string', State[State.closed]);
console.log('enum value', State.closed);

enum StateString {
    open = "open",
    closed = "closed",
    ajar = "ajar"
}

// ths syntax does not work with string
console.log('enum state string', StateString[StateString.open]);
console.log('enunb state value', StateString.open);