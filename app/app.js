import Resolver from 'ember/resolver';
import {defineFixture} from 'ic-ajax';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'shop', // TODO: loaded via config
  Resolver: Resolver
});

export default App;
