import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Linus Torvalds', 'John Carmack', 'Bill Gates'];
  }
});
