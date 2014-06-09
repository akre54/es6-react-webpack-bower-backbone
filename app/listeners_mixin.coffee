module.exports =
  componentWillMount: ->
    @listeners = @getListeners()
    for listener in @listeners
      listener.model.on listener.events, this

  componentWillUnmount: ->
    for listener in @listeners
      listener.model.off listener.events, this
