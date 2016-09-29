// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.trigger('render', this);
    var html = [
      '<table>',
      '<th>',
      'Song Queue',
      '</th>',
      '<tbody>',
      '</tbody>',
      '</table>',
    ].join('');

    this.$el.html(html);

    // this.$el.find('ul').append(this.collection.map(function (song) {
    //   return '<li>' + song.get('title') + '</li>';
    // }));

    return this.$el;
  }

});
