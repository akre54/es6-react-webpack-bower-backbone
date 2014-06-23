{Model} = require 'backbone'

class User extends Model
  url: 'empty'
  defaults:
    name: 'Curly'
    title: 'Stooge'

module.exports = User