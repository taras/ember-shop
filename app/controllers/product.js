export default Ember.ObjectController.extend({
  finalPrice: function() {
    var price = this.get('price');
    if (this.get('isDiscounted')) {
      return price - price * this.get('discount') / 100;
    } else {
      return price;
    }
  }.property('isDiscounted', 'price', 'discount')
});