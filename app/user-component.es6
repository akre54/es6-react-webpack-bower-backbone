import React from 'react';
import ListenersMixin from './listeners-mixin';

var {div, h1, h2} = React.DOM;

export default React.createClass({
  mixins: [ListenersMixin],

  getListeners: function () {
    return [{
      model: this.props.user,
      events: {change: this.forceUpdate.bind(this, null)}
    }];
  },

  componentWillMount: function () {
    this.props.user.fetch();
  },

  render: function () {
    var user = this.props.user;
    return div( {className: 'user'},
        h1(null, user.get('name')),
        h2(null, user.get('title'))
      );
  }
});