module.exports = function(msg) {
  var textNode = document.createTextNode(msg);
  document.body.appendChild(textNode);
};
