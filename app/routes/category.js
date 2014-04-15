export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params)
      .then(function(result){
        return result.get('firstObject');
      });
  }
});