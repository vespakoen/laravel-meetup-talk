var React = require('react');

var Btn = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    };
  },

  getDefaultProps: function() {
    return {
      title: "Button without a title..."
    };
  },

  onClicked: function() {
    alert('I was clicked man =D');
    this.setState({
      loading: true
    });

    setTimeout(function() {
      this.setState({
        loading: false
      });
    }.bind(this), 2000);
  },

  render: function() {
    return <a className="btn btn-large" onClick={this.onClicked}>
      {this.state.loading ? 'Hang in there... ' : ''}
      {this.props.title}
    </a>;
  }
});

module.exports = Btn;
