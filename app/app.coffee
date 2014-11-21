React = require 'react'
User = require './user'
UserComponent = React.createFactory require './user_component'
ButtonComponent = React.createFactory require './button'

user = new User id: 1
React.render UserComponent({user}), document.body
# React.render ButtonComponent({}), document.body

setTimeout (-> user.set('name', 'Adam')), 5000