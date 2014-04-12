export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  category: DS.hasMany('category'),
  price: DS.attr('number'),
  publishDate: DS.attr('date'),
  isDiscounted: DS.attr('bool'),
  discount: DS.attr('number')
});