import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return this.store.findQuery('product', {featured: 1});
  }
});
