var diffMatchPatch = require('diff-match-patch-node')();

var similar = function(str1, str2) {
  var diffs = diffMatchPatch.diff_main(str1, str2);
  diffMatchPatch.diff_cleanupSemantic(diffs);

  var flag = true;
  var sameCount = 0;
  var diffCount = 0;
  var similarity = 0;

  for(var i = 0, len = diffs.length; i < len; i++) {
    var item = diffs[i];
    if(item[0] === 0) {
      sameCount += item[1].split(' ').length;
      flag = true;
    } else {
      if(flag) {
        diffCount += item[1].split(' ').length;
      }
      flag = false;
    }
  }
  similarity = (sameCount * 100) / (diffCount + sameCount);

  return similarity;
}

module.exports = similar;
