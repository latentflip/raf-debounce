# raf-debounce

Debounce functions to run once per requestAnimationFrame

```
var rafDebounce = require('raf-debounce');

var somethingSlow = function () { /*...*/ };

var debounced = rafDebounce(somethingSlow);
```
