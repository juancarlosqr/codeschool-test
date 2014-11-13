App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about', {path: 'about-us'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'orange', 'green'];
  }
});
