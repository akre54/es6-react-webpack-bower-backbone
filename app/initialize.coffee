
# Set up Backbone.ajax to use window.fetch
window.Promise or= require 'bluebird'
require 'fetch'
Backbone = require 'backbone'
Backbone.ajax = require 'backbone.fetch'

