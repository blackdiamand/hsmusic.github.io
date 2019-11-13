// This is used by upd8.js! It's part of the 8ackend. Read the notes there if
// you're curious.
//
// Friendly(!) disclaimer: these utility functions haven't 8een tested all that
// much. Do not assume it will do exactly what you want it to do in all cases.
// It will likely only do exactly what I want it to, and only in the cases I
// decided were relevant enough to 8other handling.

'use strict';

// Apparently JavaScript doesn't come with a function to split an array into
// chunks! Weird. Anyway, this is an awesome place to use a generator, even
// though we don't really make use of the 8enefits of generators any time we
// actually use this. 8ut it's still awesome, 8ecause I say so.
module.exports.splitArray = function*(array, fn) {
    let lastIndex = 0;
    while (lastIndex < array.length) {
        let nextIndex = array.findIndex((item, index) => index >= lastIndex && fn(item));
        if (nextIndex === -1) {
            nextIndex = array.length;
        }
        yield array.slice(lastIndex, nextIndex);
        // Plus one because we don't want to include the dividing line in the
        // next array we yield.
        lastIndex = nextIndex + 1;
    }
};

// This function's name is a joke. Jokes! Hahahahahahahaha. Funny.
module.exports.joinNoOxford = function(array) {
    if (array.length === 0) {
        // ????????
        return '';
    }

    if (array.length === 1) {
        return array[0];
    }

    if (array.length === 2) {
        return `${array[0]} and ${array[1]}`;
    }

    return `${array.slice(0, -1).join(', ')} and ${array[array.length - 1]}`;
};