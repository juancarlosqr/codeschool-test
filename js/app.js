App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.route('crew', {path: 'crew'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'orange', 'green'];
  }
});

App.CrewRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('person');
	}
});