var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource('category', {path: ':category_slug'}, function(){
    this.route('product', {path: ':product_slug'});
  });

  this.resource('cart', function(){
    this.route('checkout');
    this.route('login');
    this.route('confirmation');
  });
});

export default Router;
