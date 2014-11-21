React = require 'react'
{div, button, h1} = React.DOM

module.exports = React.createClass
  getInitialState: ->
    count: 0
  onClick: ->
    @setState { count: @state.count + 1 }
  render: ->
    div {className: 'button'},
      h1 null, "Button has been clicked #{@state.count} times"
      button { @onClick }, "click me!"