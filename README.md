# similar
compare the similarity of two string

Example:
```javascript
var str1 = 'Continuous Integration Your Hexo Blog With Travis CI';
var str2 = 'Continuous Integration Your Hexo Blog With Travis';
var similar = require('./index.js');
similar(str1, str2); // return 77.77, range 0-100(exactly the same)
```
