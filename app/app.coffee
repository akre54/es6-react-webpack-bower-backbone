React = require 'react'
User = require './user'
UserComponent = React.createFactory require './user_component'

user = new User id: 1
React.render UserComponent({user}), document.body

