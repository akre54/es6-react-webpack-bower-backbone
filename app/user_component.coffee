React = require 'react'
ListenersMixin = require './listeners_mixin'
{div, h1, h2} = React.DOM

module.exports = React.createClass
  mixins: [ListenersMixin]

  getListeners: ->
    [
      model: this.props.user,
      events: {change: this.forceUpdate.bind(this, null)}
    ]

  componentWillMount: ->
    @props.user.fetch()

  render: ->
    user = @props.user
    div className: 'user',
      h1 null, user.get 'name'
      h2 null, user.get 'title'
