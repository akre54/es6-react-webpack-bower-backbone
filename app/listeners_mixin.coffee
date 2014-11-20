_ = require 'underscore'
Backbone = require 'backbone'

module.exports = _.extend
  componentWillMount: ->
    @listeners = @getListeners()
    for listener in @listeners
      @listenTo listener.model, listener.events

  componentWillUnmount: ->
    for listener in @listeners
      @stopListening listener.model, listener.events

, Backbone.Events
