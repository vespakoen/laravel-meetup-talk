var React = require('react');
var Btn = require('./Btn.jsx');

React.render(<Btn title="Our cool button" />, document.body);

// for SEO purposes, we can render the react components on the server, and spit it out as the response
var str = React.renderToString(<Btn title="Our cool button" />);
str = '<html><body>' + str + '</body><script src="bundle.js"></script></html>';
console.log(str);
