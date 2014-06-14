React = require 'react'
User = require './user'
UserComponent = require './user_component'

user = new User id: 1
React.renderComponent UserComponent({user}), document.body
