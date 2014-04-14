export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id);
  },
  serialize: function(model) {
    return {
      product_id: model.get('id'),
      category_id: model.get('category.id')
    }
  }
});
