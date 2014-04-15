export default Ember.ArrayController.extend({
  itemController: 'product',
  prices: Em.computed.mapBy('@this', 'price'),
  finalPrices: Em.computed.mapBy('@this', 'finalPrice')
});