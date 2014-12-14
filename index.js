var raf = require('raf');

module.exports = function rafDebounce(fn, context) {
    var args;
    var queued = false;

    return function () {
        var args = arguments;

        context = context || this;

        if (!queued) {
            queued = true;
            raf(function () {
                fn.apply(context, args);
                queued = false;
            });
        }
    };
};
