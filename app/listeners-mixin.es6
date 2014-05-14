export default {
  componentWillMount: function () {
    (this.listeners = this.getListeners()).forEach(function (listener) {
      listener.model.on(listener.events, this);
    }, this);
  },

  componentWillUnmount: function () {
    this.listeners.forEach(function (listener) {
      listener.model.off(listener.events, this);
    }, this);
  }
};
