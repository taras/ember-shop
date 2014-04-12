export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  products: DS.hasMany('product')
});