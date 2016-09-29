// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // initialize: function () {
  //   var queue = new SongQueueView(this.get('songQueue'));
  //   this.on('enqueue', function () {
  //     this.render();
  //   });
  // },

  

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    console.log('line 24 success');
    return this.$el.html(this.template(this.model.attributes));
  }
});
