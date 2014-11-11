var fs = require('fs');
var http = require('http');
var JSONStream = require('JSONStream');

// var data = fs.readFileSync(__dirname + '/data.txt', 'utf8');
// console.log(data);

var stream = http.get('http://localhost:8080', function (res) {
  function filterNews(hit) {
    if (hit._source.title_nl) {
    // if (hit._type == "news" && hit._source.image_list_highres) {
      return hit._source;
    }

    return null;
  }

  res
    .pipe(JSONStream.parse('hits.hits.*', filterNews))
    .on('data', function (item) {
      var img = document.createElement('img');
      img.src = item.image_list_highres;
      document.body.appendChild(img);

      var title = document.createElement('h1');
      title.appendChild(document.createTextNode(item.title_nl));
      document.body.appendChild(title);

      var paragraph = document.createElement('p');
      paragraph.innerHTML = item.content_nl;
      document.body.appendChild(paragraph);

      window.scrollTo(0, document.body.scrollHeight);
    });
});
